import { create } from "zustand";

interface State {
  isLoggedIn: boolean;
  setLoggedIn: (accessToken: string, refreshToken: string) => void;
  setLoggedOut: () => void;
}

export const useUsersStore = create<State>((set) => ({
  isLoggedIn: localStorage.getItem("access-token") ? true : false,

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
