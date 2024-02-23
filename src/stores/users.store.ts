import { create } from "zustand";

interface State {
  isLoggedIn: boolean;
  setLoggedIn: (accessToken: string, refreshToken: string) => void;
  setLoggedOut: () => void;
}

export const useUsersStore = create<State>((set) => ({
  isLoggedIn: getAccessToken() ? true : false,

  setLoggedIn: (accessToken: string, refreshToken: string) => {
    setAccessToken(accessToken);
    setRefreshToken(refreshToken);
    set({ isLoggedIn: true });
  },

  setLoggedOut: () => {
    removeTokens();
    set({ isLoggedIn: false });
  },
}));

export function getAccessToken() {
  return localStorage.getItem("access-token") || undefined;
}

export function getRefreshToken() {
  return localStorage.getItem("refresh-token") || undefined;
}

export function setAccessToken(accessToken: string) {
  localStorage.setItem("access-token", accessToken);
}

function setRefreshToken(refreshToken: string) {
  localStorage.setItem("refresh-token", refreshToken);
}

function removeTokens() {
  localStorage.removeItem("access-token");
  localStorage.removeItem("refresh-token");
}
