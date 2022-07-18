import { useEffect, useState } from "react";

export function useLocalStorageState<T>(
  key: string,
  initialState: T | (() => T),
) {
  const [state, setState] = useState<T>(() => {
    const existingState = localStorage.getItem(key);

    if (existingState) {
      return JSON.parse(existingState);
    }

    if (typeof initialState === "function") {
      return (initialState as () => T)();
    }

    return initialState;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState] as const;
}
