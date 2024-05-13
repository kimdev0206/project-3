import { create } from "zustand";

interface State {
  isLoggedIn: boolean;
  setLoggedIn: (accessToken: string, refreshToken: string) => void;
  setLoggedOut: () => void;
}

export const useUsersStore = create<State>((set) => ({
  isLoggedIn: getAccessToken() ? true : false,

  setLoggedIn: (accessToken: string, refreshToken: string) => {
    localStorage.setItem("access-token", accessToken);
    localStorage.setItem("refresh-token", refreshToken);
    set({ isLoggedIn: true });
  },

  setLoggedOut: () => {
    localStorage.removeItem("access-token");
    localStorage.removeItem("refresh-token");
    set({ isLoggedIn: false });
  },
}));

export function getAccessToken() {
  const accessToken = localStorage.getItem("access-token");

  if (!accessToken) return null;

  if (accessToken === "null") return null;

  return accessToken;
}

export function getRefreshToken() {
  const refreshToken = localStorage.getItem("refresh-token");

  if (!refreshToken) return null;

  if (refreshToken === "null") return null;

  return refreshToken;
}
