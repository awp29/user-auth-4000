/** @jsxImportSource @emotion/react */

interface Props {
  disabled?: boolean;
  type?: "button" | "submit" | "reset" | undefined;
  children: React.ReactNode;
}

const Button: React.FC<Props> = (props) => {
  const { disabled, type = "button", children } = props;

  return (
    <button
      css={{
        cursor: !disabled ? "pointer" : "inherit",
        backgroundColor: "#161616",
        borderRadius: "0.5rem",
        border: "none",
        height: "44px",
        width: "100%",
        color: "white",
        fontSize: "1rem",
        fontWeight: "bold",
        padding: "0.75rem 1.5rem",
        opacity: !disabled ? 1 : 0.3,
        "&:hover": {
          backgroundColor: !disabled ? "#2e2e2e" : "#161616",
        },
      }}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
