/** @jsxImportSource @emotion/react */

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../auth/AuthContext";
import {
  AppTitle,
  Button,
  SecondaryButton,
  TextButton,
} from "../../components";
import { Error, Form, Input } from "../../components/form";
import { useInputField } from "../../components/form/useInputField";
import {
  allValid,
  invalidPasswordErrorMessage,
  isEmail,
  isPassword,
} from "../../components/form/validators";
import { Footer } from "./components";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const emailInput = useInputField(isEmail);
  const passwordInput = useInputField(isPassword);

  const formValid = allValid([emailInput.valid, passwordInput.valid]);

  return (
    <div
      css={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <div
        css={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
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
            maxWidth: "400px",
          }}
          onSubmit={async (e) => {
            e.preventDefault();

            if (formValid) {
              try {
                await login(emailInput.value, passwordInput.value);
                navigate("/");
              } catch (error) {
                console.error(error);
              }
            }
          }}
        >
          <div css={{ marginBottom: "1rem" }}>
            <Input
              value={emailInput.value}
              placeholder="Email address"
              error={emailInput.hasError}
              onChange={emailInput.onChange}
              onBlur={emailInput.onBlur}
            />
            {emailInput.hasError && <Error>Invalid email address</Error>}
          </div>

          <div css={{ marginBottom: "1.5rem" }}>
            <Input
              value={passwordInput.value}
              type="password"
              placeholder="Password"
              error={passwordInput.hasError}
              onChange={passwordInput.onChange}
              onBlur={passwordInput.onBlur}
            />
            {passwordInput.hasError && (
              <Error>{invalidPasswordErrorMessage}</Error>
            )}
          </div>

          <Button type="submit" disabled={!formValid}>
            Log in
          </Button>
        </Form>

        <TextButton onClick={() => console.log("forgot your password?")}>
          Forgot your password?
        </TextButton>
      </div>

      <Footer>
        <p css={{ marginRight: "1.25rem" }}>Don't have an account?</p>
        <SecondaryButton onClick={async () => navigate("/signup")}>
          Sign up
        </SecondaryButton>
      </Footer>
    </div>
  );
};

export default Login;
