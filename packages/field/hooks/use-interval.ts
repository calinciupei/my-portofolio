import { useEffect, useRef } from "react";

type Callback = () => void;

function useInterval(callback: Callback, delay: number | null): void {
  const saveCallback = useRef(() => {});

  useEffect(() => {
    saveCallback.current = callback;
  }, [callback]);

  useEffect((): undefined | Callback => {
    const tick = (): void => {
      saveCallback.current();
    };

    if (delay !== null) {
      const id = setInterval(tick, delay);

      return () => clearInterval(id);
    }

    return;
  }, [delay]);
}

export { useInterval };
