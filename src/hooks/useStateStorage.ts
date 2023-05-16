import { useState, useEffect } from 'react';

export const useStateStorage = <T extends unknown>(
  key: string
  // eslint-disable-next-line no-unused-vars
): { value: T | undefined; storeValue: (value: T) => void; resetValue: () => void } => {
  const [value, setValue] = useState<T | undefined>(() => {
    const jsonValue = localStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : undefined;
  });

  useEffect(() => {
    if (value !== undefined) {
      localStorage.setItem(key, JSON.stringify(value));
    } else {
      localStorage.removeItem(key);
    }
  }, [key, value]);

  const storeValue = (value: T) => {
    setValue(value);
  };

  const resetValue = () => {
    setValue(undefined);
  };

  return { value, storeValue, resetValue };
};
