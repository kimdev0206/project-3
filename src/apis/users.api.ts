import { httpClient } from "./http";
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
