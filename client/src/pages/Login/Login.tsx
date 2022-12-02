/** @jsxImportSource @emotion/react */

import { useState } from "react";
import {
  AppTitle,
  Button,
  SecondaryButton,
  TextButton,
} from "../../components";
import { Form, Input } from "../../components/form";
import { Footer } from "./components";

const Login: React.FC = () => {
  const [emailAddress, setEmailAddress] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);

  return (
    <div
      css={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div
        css={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          "@media only screen and (min-width: 480px)": {
            height: "100vh",
            justifyContent: "center",
            paddingBottom: "5.626rem",
          },
        }}
      >
        <AppTitle
          css={{
            margin: "64px 0px 32px 0px",
          }}
        />

        <Form
          css={{
            padding: "0px 1rem",
            marginBottom: "2rem",
            "@media only screen and (min-width: 480px)": {
              maxWidth: "400px",
            },
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
      </div>

      <Footer>
        <p css={{ marginRight: "1.25rem" }}>Don't have an account?</p>
        <SecondaryButton onClick={() => console.log("sign up")}>
          Sign up
        </SecondaryButton>
      </Footer>
    </div>
  );
};

export default Login;
