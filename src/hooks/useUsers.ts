import { useState } from "react";
import { useNavigate } from "react-router-dom";
import UsersAPI from "../apis/users.api";
import { useAlert } from "./useAlert";
import { Props } from "../pages/SignUp";
import { useUsersStore } from "../stores/users.store";

export default function useUsers() {
  const [isRequested, setIsRequested] = useState(false);
  const navigate = useNavigate();
  const alert = useAlert();
  const { setLoggedIn } = useUsersStore();

  const handleSignUp = async (props: Props) => {
    const response = await UsersAPI.signUp(props);
    alert(response.message);

    if (response.status !== 201) return;

    navigate("/users/log-in");
  };

  const handleLogIn = async (props: Props) => {
    const response = await UsersAPI.logIn(props);
    alert(response.message);

    if (response.status !== 200) return;

    setLoggedIn(response.accessToken, response.refreshToken);
    navigate("/");
  };

  const handleResetPassword = async (props: Props) => {
    if (!isRequested) {
      const response = await UsersAPI.postResetPassword(props.email);
      alert(response.message);

      if (response.status !== 200) return;

      setIsRequested(true);
      return;
    }

    const response = await UsersAPI.putResetPassword(props);
    alert(response.message);

    if (response.status !== 200) return;

    navigate("/users/log-in");
  };

  return { handleSignUp, handleLogIn, handleResetPassword, isRequested };
}
