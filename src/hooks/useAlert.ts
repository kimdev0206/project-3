import { useCallback } from "react";

export function useAlert() {
  return useCallback((message: string) => window.alert(message), []);
}

export function useConfirm() {
  return useCallback((message: string, onConfirm: () => void) => {
    if (window.confirm(message)) onConfirm();
  }, []);
}
