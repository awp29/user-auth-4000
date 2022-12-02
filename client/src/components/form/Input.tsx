/** @jsxImportSource @emotion/react */

import { ChangeEvent } from "react";

interface Props {
  className?: string;
  value: string;
  placeholder: string;

  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<Props> = (props) => {
  const { className, value, placeholder, onChange } = props;

  return (
    <input
      className={className}
      css={{
        minHeight: "2.75rem",
        width: "100%",
        padding: "8px 12px",
        borderRadius: "0.5rem",
        border: "1px solid transparent",
        fontSize: "1rem",
        "&::placeholder": {
          color: "#666666",
        },
        "&:hover": {
          boxShadow: "0 1px 3px 0 rgb(0 0 0 / 10%)",
        },
        "&:focus": {
          outline: "none",
          borderColor: "rgba(22,22,22,.15)",
        },
      }}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default Input;
