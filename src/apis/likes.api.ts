import AuthorizeInterceptor from "../interceptors/authorize.interceptor";

export default class LikesAPI {
  static url = process.env.REACT_APP_BASE_URL + "/likes";

  static async postLike(bookID: number) {
    const response = await AuthorizeInterceptor.fetch(this.url + `/${bookID}`, {
      method: "POST",
    });

    return { status: response.status };
  }

  static async deleteLike(bookID: number) {
    const response = await AuthorizeInterceptor.fetch(this.url + `/${bookID}`, {
      method: "DELETE",
    });

    return { status: response.status };
  }
}
