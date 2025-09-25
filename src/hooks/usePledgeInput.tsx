import { useState, type ChangeEvent } from "react";

export const usePledgeInput = (pledge: string) => {
  const [value, setValue] = useState(pledge);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const parsedInput = parseFloat(inputValue);

    if (isNaN(parsedInput)) {
      setValue("");
      return;
    }

    setValue(inputValue);
  };

  const handleBlur = () => {
    const parsedInput = parseFloat(value);
    const parsedPledge = parseFloat(pledge);

    if (isNaN(parsedInput) || parsedInput < parsedPledge) {
      setValue(pledge);
    }
  };

  return { value, setValue, handleInputChange, handleBlur };
};
