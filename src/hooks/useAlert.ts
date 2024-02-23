import { useCallback } from "react";

export function useAlert() {
  return useCallback((message: string) => window.alert(message), []);
}
