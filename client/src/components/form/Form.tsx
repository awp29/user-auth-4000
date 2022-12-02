/** @jsxImportSource @emotion/react */

import { FormEvent } from "react";

interface Props {
  className?: string;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
  children: React.ReactNode;
}

const Form: React.FC<Props> = (props) => {
  const { className, onSubmit, children } = props;

  return (
    <form className={className} onSubmit={onSubmit} css={{ width: "100%" }}>
      {children}
    </form>
  );
};

export default Form;
