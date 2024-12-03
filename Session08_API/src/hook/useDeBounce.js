import { useEffect, useState } from "react";

export const useDebounce = (value, delay) => {
  const [searchValue, setSearchValue] = useState(value);
  useEffect(() => {
    const timeOutId = setTimeout(() => {
      setSearchValue(value);
    }, delay);

    return clearTimeout(timeOutId);
  }, [value, delay]);

  return searchValue;
};