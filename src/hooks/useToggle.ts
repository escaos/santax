import { useState } from 'react';

export const useToggle = (initValue?: boolean) => {
  const [value, setValue] = useState(initValue ?? false);
  const onToggle = () => setValue((prevValue) => !prevValue);
  return { value, onToggle };
};
