// Best scores live in this browser only; storage can be blocked, so never throw.
export const loadNumber = (key: string): number | null => {
  try {
    const value = localStorage.getItem(key);
    return value === null ? null : Number(value);
  } catch {
    return null;
  }
};

export const saveNumber = (key: string, value: number) => {
  try {
    localStorage.setItem(key, String(value));
  } catch {
    // ignore
  }
};
