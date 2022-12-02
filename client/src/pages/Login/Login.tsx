/** @jsxImportSource @emotion/react */

import { useState } from "react";
import { Button, SignUpButton, TextButton } from "../../components";
import { Form, Input } from "../../components/form";
import { Footer } from "./components";

const Login: React.FC = () => {
  const [emailAddress, setEmailAddress] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);

  return (
    <div
      css={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <h1
        css={{
          fontSize: "24px",
          fontWeight: "bold",
          margin: "64px 0px 32px 0px",
        }}
      >
        User Auth <span css={{ color: "#82817F" }}>4000</span>
      </h1>

      <Form
        css={{
          padding: "0px 1rem",
          marginBottom: "2rem",
        }}
        onSubmit={(e) => {
          e.preventDefault();

          console.log("submit");
        }}
      >
        <Input
          css={{ marginBottom: "16px" }}
          placeholder="Email address"
          value={emailAddress ? emailAddress : ""}
          onChange={(e) => {
            setEmailAddress(e.target.value);
          }}
        />

        <Input
          css={{ marginBottom: "24px" }}
          placeholder="Password"
          value={password ? password : ""}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />

        <Button type="submit">Log in</Button>
      </Form>

      <TextButton onClick={() => console.log("forgot your password?")}>
        Forgot your password?
      </TextButton>

      <Footer>
        <p>Don't have an account?</p>
        <SignUpButton onClick={() => console.log("sign up")}>
          Sign up
        </SignUpButton>
      </Footer>
    </div>
  );
};

export default Login;
