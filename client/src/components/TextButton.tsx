/** @jsxImportSource @emotion/react */

interface Props {
  onClick: () => void;
  children: React.ReactNode;
}

const TextButton: React.FC<Props> = (props) => {
  const { onClick, children } = props;

  return (
    <button
      css={{
        cursor: "pointer",
        backgroundColor: "transparent",
        border: "none",
        fontSize: "1rem",
        textDecoration: "underline",
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default TextButton;
