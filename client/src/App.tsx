/** @jsxImportSource @emotion/react */

import { ChangeEvent, useState } from "react";

function App() {
  const [username, setUsername] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);

  return (
    <div
      css={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1>USER AUTH 4000</h1>

      <form
        onSubmit={async (e) => {
          e.preventDefault();

          const response = await fetch("http://localhost:3001/signin", {
            method: "POST",
            body: JSON.stringify({ username, password }),
          });

          console.log("response", response);
        }}
      >
        <h2>LOGIN</h2>

        <div>
          <input
            value={username ? username : ""}
            placeholder="username"
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setUsername(e.target.value);
            }}
          />
        </div>

        <div>
          <input
            value={password ? password : ""}
            placeholder="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>

        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default App;
