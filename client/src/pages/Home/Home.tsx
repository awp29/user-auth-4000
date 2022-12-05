/** @jsxImportSource @emotion/react */

import { useAuth } from "../../auth/AuthContext";

const Home: React.FC = () => {
  const { user } = useAuth();

  console.log("user", user);

  return (
    <div>
      <h1>HOME!!!!!!</h1>
      {user && <pre>user: {user.email}</pre>}
    </div>
  );
};

export default Home;
