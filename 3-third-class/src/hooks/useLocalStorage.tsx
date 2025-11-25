/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";

export const useLocalStorage = ({
  key,
  value,
}: {
  key: string;
  value: any;
}): any[] => {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const value = localStorage.getItem(key);
      if (value) {
        return JSON.parse(value);
      } else {
        localStorage.setItem(key, JSON.stringify(value));
        return value;
      }
    } catch (err) {
      console.log('Returning found value because is not a JSON:', err);
      return value;
    }
  });

  const setValue = (value: any): void => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
      console.log(err);
    }
    setStoredValue(value);
  };
  return [storedValue, setValue];
};

export default useLocalStorage;