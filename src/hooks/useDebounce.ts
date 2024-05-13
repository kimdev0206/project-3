import { useCallback, useState } from "react";

export default function useDebounce<T extends (...args: any[]) => void>(
  handler: T,
  delay = 2000
) {
  const [isHandling, setIsHandling] = useState(false);

  const debounced = useCallback(
    (...args: Parameters<T>) => {
      setIsHandling(true);
      setTimeout(() => {
        handler(...args);
        setIsHandling(false);
      }, delay);
    },
    [handler, delay]
  );

  return { debounced, isHandling };
}
