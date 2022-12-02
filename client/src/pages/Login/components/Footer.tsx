/** @jsxImportSource @emotion/react */

interface Props {
  children: React.ReactNode;
}

const Footer: React.FC<Props> = (props) => {
  const { children } = props;

  return (
    <div
      css={{
        position: "absolute",
        bottom: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        padding: "2rem 1rem",
      }}
    >
      {children}
    </div>
  );
};

export default Footer;
