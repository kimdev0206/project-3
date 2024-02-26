import httpClient from "./http";
import { Props } from "../pages/SignUp";

export async function signUp(props: Props) {
  const response = await httpClient.post("/users/sign-up", props);
  return response.data;
}

export async function postResetPassword(props: Props) {
  const response = await httpClient.post("/users/reset-password", props);
  return response.data;
}

export async function putResetPassword(props: Props) {
  const response = await httpClient.put("/users/reset-password", props);
  return response.data;
}

export async function logIn(props: Props) {
  const response = await httpClient.post("/users/log-in", props);

  return {
    message: response.data.message,
    accessToken: response.headers["authorization"],
    refreshToken: response.headers["refresh-token"],
  };
}

export async function accessToken(
  expiredAccessToken?: string,
  refreshToken?: string
) {
  const response = await httpClient.get("/users/access-token", {
    headers: {
      Authorization: expiredAccessToken,
      "Refresh-Token": refreshToken,
    },
  });

  return {
    message: response.data.message,
    accessToken: response.headers["authorization"],
  };
}
