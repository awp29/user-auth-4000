/** @jsxImportSource @emotion/react */

import { ChangeEvent, HTMLInputTypeAttribute } from "react";

interface Props {
  className?: string;
  value: string;
  placeholder?: string;
  // TODO: UNOPTIONALISE
  error?: boolean;
  type?: HTMLInputTypeAttribute;

  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  // TODO: UNOPTIONALISE
  onBlur?: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<Props> = (props) => {
  const { className, value, placeholder, error, type, onChange, onBlur } =
    props;

  return (
    <input
      className={className}
      css={{
        minHeight: "2.75rem",
        width: "100%",
        padding: "8px 12px",
        borderRadius: "0.5rem",
        border: "1px solid",
        borderColor: error ? "#D7403A" : "transparent",
        fontSize: "1rem",
        "&::placeholder": {
          color: "#666666",
        },
        "&:hover": {
          boxShadow: "0 1px 3px 0 rgb(0 0 0 / 10%)",
        },
        "&:focus": {
          outline: "none",
          borderColor: error ? "#D7403A" : "rgba(22,22,22,.15)",
        },
      }}
      value={value}
      placeholder={placeholder}
      type={type}
      onChange={onChange}
      onBlur={onBlur}
    />
  );
};

export default Input;
