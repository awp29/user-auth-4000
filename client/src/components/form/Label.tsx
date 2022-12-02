/** @jsxImportSource @emotion/react */

interface Props {
  children: React.ReactNode;
}

const Label: React.FC<Props> = (props) => {
  const { children } = props;

  return (
    <label
      css={{
        display: "block",
        fontSize: "14px",
        fontWeight: "bold",
        marginBottom: "8px",
      }}
    >
      {children}
    </label>
  );
};

export default Label;
