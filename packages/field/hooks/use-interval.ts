import { useEffect, useRef } from "react";

type Callback = () => void;

const noop = (): void => {};

// https://overreacted.io/making-setinterval-declarative-with-react-hooks/
function useInterval(callback: Callback, delay: number | null): void {
  const saveCallback = useRef(noop);

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

export { useInterval, noop };
