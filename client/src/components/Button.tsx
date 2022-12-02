/** @jsxImportSource @emotion/react */

interface Props {
  type?: "button" | "submit" | "reset" | undefined;
  children: React.ReactNode;
}

const Button: React.FC<Props> = (props) => {
  const { type = "button", children } = props;

  return (
    <button
      css={{
        cursor: "pointer",
        backgroundColor: "#161616",
        borderRadius: "0.5rem",
        border: "none",
        height: "44px",
        width: "100%",
        color: "white",
        fontSize: "1rem",
        fontWeight: "bold",
        padding: "0.75rem 1.5rem",
        "&:hover": {
          backgroundColor: "#2e2e2e",
        },
      }}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
