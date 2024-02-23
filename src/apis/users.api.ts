import { httpClient } from "./http";
import { Props } from "../pages/SignUp";

export async function signUp(props: Props) {
  const response = await httpClient.post("/users/sign-up", props);
  return response.data;
}
