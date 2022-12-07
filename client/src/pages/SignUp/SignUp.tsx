/** @jsxImportSource @emotion/react */

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../auth/AuthContext";
import { AppTitle, Button, Nav, SecondaryButton } from "../../components";
import { Error, Form, Input, Label } from "../../components/form";
import { useInputField } from "../../components/form/useInputField";
import {
  allValid,
  invalidPasswordErrorMessage,
  isEmail,
  isPassword,
  isString,
} from "../../components/form/validators";

const SignUp: React.FC = () => {
  const { signup } = useAuth();
  const navigate = useNavigate();

  const firstNameInput = useInputField(isString);
  const lastNameInput = useInputField(isString);
  const emailInput = useInputField(isEmail);
  const passwordInput = useInputField(isPassword);

  const formValid = allValid([
    firstNameInput.valid,
    lastNameInput.valid,
    emailInput.valid,
    passwordInput.valid,
  ]);

  return (
    <div>
      <Nav>
        <AppTitle />
        <SecondaryButton onClick={() => navigate("/")}>Log in</SecondaryButton>
      </Nav>

      <div css={{ padding: "0 1rem", maxWidth: "720px", margin: "auto" }}>
        <h1 css={{ fontWeight: "bold", marginBottom: "2rem" }}>Sign up</h1>

        <Form
          onSubmit={async (e) => {
            e.preventDefault();

            if (formValid) {
              try {
                await signup({
                  firstName: firstNameInput.value,
                  lastName: lastNameInput.value,
                  email: emailInput.value,
                  password: passwordInput.value,
                });
                navigate("/");
              } catch (error) {
                console.error(error);
              }
            }
          }}
        >
          <div
            css={{ display: "flex", width: "100%", marginBottom: "1.25rem" }}
          >
            <div css={{ marginRight: "12px", flex: 1 }}>
              <Label>First name*</Label>
              <Input
                value={firstNameInput.value}
                error={firstNameInput.hasError}
                onChange={firstNameInput.onChange}
                onBlur={firstNameInput.onBlur}
              />
              {firstNameInput.hasError && (
                <Error>First name cannot be empty</Error>
              )}
            </div>

            <div css={{ marginLeft: "12px", flex: 1 }}>
              <Label>Last name*</Label>
              <Input
                value={lastNameInput.value}
                error={lastNameInput.hasError}
                onChange={lastNameInput.onChange}
                onBlur={lastNameInput.onBlur}
              />
              {lastNameInput.hasError && (
                <Error>Last name cannot be empty</Error>
              )}
            </div>
          </div>

          <div css={{ marginBottom: "1.25rem" }}>
            <Label>Email*</Label>
            <Input
              value={emailInput.value}
              error={emailInput.hasError}
              onChange={emailInput.onChange}
              onBlur={emailInput.onBlur}
            />
            {emailInput.hasError && <Error>Invalid email address</Error>}
          </div>

          <div css={{ marginBottom: "1.75rem" }}>
            <Label>Password*</Label>
            <Input
              value={passwordInput.value}
              type="password"
              error={passwordInput.hasError}
              onChange={passwordInput.onChange}
              onBlur={passwordInput.onBlur}
            />
            {passwordInput.hasError && (
              <Error>{invalidPasswordErrorMessage}</Error>
            )}
          </div>

          <Button type="submit" disabled={!formValid}>
            Create account
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default SignUp;
