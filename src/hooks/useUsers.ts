import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  signUp,
  logIn,
  postResetPassword,
  putResetPassword,
} from "../apis/users.api";
import { useAlert } from "./useAlert";
import { Props } from "../pages/SignUp";
import { useUsersStore } from "../stores/users.store";

export default function useUsers() {
  const [isRequested, setIsRequested] = useState(false);
  const navigate = useNavigate();
  const alert = useAlert();
  const { setLoggedIn } = useUsersStore();

  const handleSignUp = async (props: Props) => {
    const response = await signUp(props);

    alert(response.message);
    navigate("/users/log-in");
  };

  const handleLogIn = async (props: Props) => {
    const response = await logIn(props);
    setLoggedIn(response.accessToken, response.refreshToken);

    alert(response.message);
    navigate("/");
  };

  const handleResetPassword = async (props: Props) => {
    if (isRequested) {
      const response = await putResetPassword(props);
      alert(response.message);
      return navigate("/users/log-in");
    }

    await postResetPassword(props);
    setIsRequested(true);
  };

  return { handleSignUp, handleLogIn, handleResetPassword, isRequested };
}
