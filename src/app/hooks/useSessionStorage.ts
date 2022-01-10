import { useState, useEffect } from 'react';


const getSessionStorageOrDefault = (key: string, defaultValue: any) => {
  const stored = sessionStorage.getItem(key);
  if (!stored) {
    return defaultValue;
  }
  return JSON.parse(stored);
}


/* Reusable session hook for storing user records while loggedIn */

const useSessionStorage = (key: string, defaultValue: any) => {
  const [value, setValue] = useState(
    getSessionStorageOrDefault(key, defaultValue)
  );

  useEffect(() => {
    sessionStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
}

export default useSessionStorage;
