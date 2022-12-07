import { ChangeEvent, useEffect, useState } from "react";
import { InputValidator } from "./validators";

interface InputField {
  value: string;
  hasError: boolean;
  valid: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const useInputField = (validator: InputValidator): InputField => {
  const [value, setValue] = useState<string>("");
  const [valid, setValid] = useState(false);
  const [touched, setTouched] = useState(false);

  useEffect(() => {
    const valid = validator(value);

    if (touched) {
      setValid(valid);
    }
  }, [value, touched]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onBlur = (e: ChangeEvent<HTMLInputElement>) => {
    setTouched(true);
  };

  return {
    value,
    hasError: !valid && touched,
    valid,
    onChange,
    onBlur,
  };
};
