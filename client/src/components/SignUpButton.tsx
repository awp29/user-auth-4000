/** @jsxImportSource @emotion/react */

interface Props {
  onClick: () => void;
  children: React.ReactNode;
}

const SignUpButton: React.FC<Props> = (props) => {
  const { onClick, children } = props;

  return (
    <button
      css={{
        cursor: "pointer",
        padding: "0.5rem 1rem",
        border: "1px solid rgba(0,0,0,.15)",
        borderRadius: "0.5rem",
        fontSize: "16px",
        fontWeight: "bold",
        "&:hover": {
          backgroundColor: "#d8d5d1",
        },
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default SignUpButton;
