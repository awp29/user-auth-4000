/** @jsxImportSource @emotion/react */

interface Props {
  children: React.ReactNode;
}

const Error: React.FC<Props> = (props) => {
  const { children } = props;

  return (
    <p
      css={{
        fontWeight: "bold",
        fontSize: "12px",
        color: "#D7403A",
        marginTop: "4px",
      }}
    >
      {children}
    </p>
  );
};

export default Error;
