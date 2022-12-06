/** @jsxImportSource @emotion/react */

import { useNavigate } from "react-router-dom";
import { useAuth } from "../../auth/AuthContext";

const Home: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <div>
      <h1>HOME!!!!!!</h1>

      <p>MOTHER FLIPPING USER</p>
      {user && <pre>{JSON.stringify(user, null, 2)}</pre>}

      <button
        onClick={() => {
          logout();
          navigate("/login");
        }}
      >
        Log Out
      </button>
    </div>
  );
};

export default Home;
