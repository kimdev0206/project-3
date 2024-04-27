import { Props } from "../pages/SignUp";

export default class UsersAPI {
  static url = process.env.REACT_APP_BASE_URL + "/users";

  static async signUp(params: Props) {
    let searchParams = new URLSearchParams();

    for (const [key, value] of Object.entries(params)) {
      searchParams.append(key, value);
    }

    const response = await fetch(this.url + "/sign-up", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: searchParams,
    });

    const { message } = await response.json();
    return { status: response.status, message };
  }

  static async logIn(params: Props) {
    let searchParams = new URLSearchParams();

    for (const [key, value] of Object.entries(params)) {
      searchParams.append(key, value);
    }

    const response = await fetch(this.url + "/log-in", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: searchParams,
    });

    const { message } = await response.json();
    return {
      status: response.status,
      message,
      accessToken: response.headers.get("authorization")!,
      refreshToken: response.headers.get("refresh-token")!,
    };
  }

  static async postResetPassword(email: string) {
    const response = await fetch(this.url + "/reset-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams({ email }),
    });

    const { message } = await response.json();
    return { status: response.status, message };
  }

  static async putResetPassword(params: Props) {
    let searchParams = new URLSearchParams();

    for (const [key, value] of Object.entries(params)) {
      searchParams.append(key, value);
    }

    const response = await fetch(this.url + "/reset-password", {
      method: "PUT",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: searchParams,
    });

    const { message } = await response.json();
    return { status: response.status, message };
  }

  static async getAccessToken(
    expiredAccessToken: string,
    refreshToken: string
  ) {
    const response = await fetch(this.url + "/access-token", {
      method: "GET",
      headers: {
        Authorization: expiredAccessToken,
        "Refresh-Token": refreshToken,
      },
    });

    const { message } = await response.json();

    return {
      status: response.status,
      message,
      accessToken: response.headers.get("authorization"),
    };
  }
}
