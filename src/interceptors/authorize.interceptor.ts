import UsersAPI from "../apis/users.api";

interface Options {
  method: string;
  headers?: {
    [key: string]: string;
  };
  body?: string;
}

export default class AuthorizeInterceptor {
  static async preRequest() {
    const accessToken = localStorage.getItem("access-token");
    const refreshToken = localStorage.getItem("refresh-token");

    if (!accessToken || !refreshToken) {
      window.alert(
        "로그인 API 를 통해 접근 토큰 및 재발급 토큰을 발급 받으세요."
      );
      window.location.href = "/users/log-in";
      return;
    }

    if (accessToken && refreshToken) {
      const response = await UsersAPI.getAccessToken(accessToken, refreshToken);

      if (response.status === 403) {
        window.alert(response.message);
        window.location.href = "/users/log-in";
        return;
      }

      localStorage.setItem("access-token", response.accessToken!);
    }
  }

  static async postResponse(response: Response) {
    if (response.status === 401) {
      const { message } = await response.json();

      window.alert(message);

      if (message.startsWith("접근 토큰이 만료되었습니다.")) {
        const accessToken = localStorage.getItem("access-token")!;
        const refreshToken = localStorage.getItem("refresh-token")!;

        const response = await UsersAPI.getAccessToken(
          accessToken,
          refreshToken
        );

        if (response.status === 403) {
          window.alert(response.message);
          window.location.href = "/users/log-in";
          return;
        }

        localStorage.setItem("access-token", response.accessToken!);

        window.location.reload();
        return;
      }

      if (message.startsWith("재발급 토큰이 만료되었습니다.")) {
        window.location.href = "/users/log-in";
        return;
      }
    }
  }

  static async fetch(url: string, options: Options) {
    await this.preRequest();

    const accessToken = localStorage.getItem("access-token")!;
    const response = await fetch(url, {
      ...options,
      credentials: "include",
      headers: {
        ...options.headers,
        Authorization: accessToken,
      },
    });

    await this.postResponse(response);

    return response;
  }
}
