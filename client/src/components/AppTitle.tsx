/** @jsxImportSource @emotion/react */

interface Props {
  className?: string;
}

const AppTitle: React.FC<Props> = (props) => {
  const { className } = props;

  return (
    <h1
      className={className}
      css={{
        fontSize: "1.5rem",
        fontWeight: "bold",
      }}
    >
      User Auth <span css={{ color: "#82817F" }}>4000</span>
    </h1>
  );
};

export default AppTitle;
