/** @jsxImportSource @emotion/react */

import { useNavigate } from "react-router-dom";
import { useAuth } from "../../auth/AuthContext";
import { AppTitle, Nav, SecondaryButton } from "../../components";

const Home: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <div>
      <Nav>
        <AppTitle />

        <SecondaryButton
          onClick={() => {
            logout();
            navigate("/login");
          }}
        >
          Log Out
        </SecondaryButton>
      </Nav>

      <div
        css={{
          padding: "0 1rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div>
          <h1 css={{ fontWeight: "bold", marginBottom: "2rem" }}>
            Current User
          </h1>
          {user && <pre>{JSON.stringify(user, null, 2)}</pre>}
        </div>
      </div>
    </div>
  );
};

export default Home;
