import axios, { AxiosRequestConfig, HttpStatusCode } from "axios";
import {
  getAccessToken,
  getRefreshToken,
  setAccessToken,
} from "../stores/users.store";
import { accessToken } from "./users.api";

function createClient(config?: AxiosRequestConfig) {
  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
    headers: {
      "Content-Type": "application/json",
      Authorization: getAccessToken(),
    },
    withCredentials: true,
    ...config,
  });

  axiosInstance.interceptors.response.use(
    (response) => {
      return response;
    },
    async (error) => {
      const { status } = error.response;

      if (status === HttpStatusCode.BadRequest) {
        const { errors } = error.response.data;
        window.alert(errors[0].msg);
        return;
      }

      const { message } = error.response.data;

      if (status === HttpStatusCode.Unauthorized) {
        if (message.startsWith("접근 토큰이 만료되었습니다.")) {
          const response = await accessToken(
            getAccessToken(),
            getRefreshToken()
          );
          setAccessToken(response.accessToken);

          window.alert(response.message);
          return;
        }

        if (message.startsWith("재발급 토큰이 만료되었습니다.")) {
          window.location.href = "/users/log-in";
          return;
        }
      }

      return Promise.reject(error);
    }
  );

  return axiosInstance;
}

const httpClient = createClient();

export default httpClient;
