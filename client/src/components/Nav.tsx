/** @jsxImportSource @emotion/react */

interface Props {
  children: React.ReactNode;
}

const Nav: React.FC<Props> = (props) => {
  const { children } = props;

  return (
    <nav
      css={{
        display: "flex",
        justifyContent: "space-between",
        padding: "1.5rem 1rem",
        maxWidth: "1280px",
        margin: "0 auto 4rem auto",
      }}
    >
      {children}
    </nav>
  );
};

export default Nav;
