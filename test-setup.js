const noop = () => ({});

Object.defineProperty(window, { value: noop, writable: true });