/** @jsxImportSource @emotion/react */

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../auth/AuthContext";
import { AppTitle, Button, Nav, SecondaryButton } from "../../components";
import { Form, Input, Label } from "../../components/form";

const SignUp: React.FC = () => {
  const [firstName, setFirstName] = useState<string | null>(null);
  const [lastName, setLastName] = useState<string | null>(null);
  const [email, setEmail] = useState<string | null>(null);
  const [password, setPassword] = useState<string | null>(null);
  const { signup } = useAuth();
  const navigate = useNavigate();

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

            if (!firstName || !lastName || !email || !password) {
              return;
            }

            try {
              await signup({ firstName, lastName, email, password });
              navigate("/");
            } catch (error) {
              throw new Error("Error: failed to singup");
            }
          }}
        >
          <div
            css={{ display: "flex", width: "100%", marginBottom: "1.25rem" }}
          >
            <div css={{ marginRight: "12px", flex: 1 }}>
              <Label>First name*</Label>
              <Input
                value={firstName ? firstName : ""}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />
            </div>

            <div css={{ marginLeft: "12px", flex: 1 }}>
              <Label>Last name*</Label>
              <Input
                value={lastName ? lastName : ""}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />
            </div>
          </div>

          <div css={{ marginBottom: "1.25rem" }}>
            <Label>Email*</Label>
            <Input
              value={email ? email : ""}
              placeholder="Email address"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>

          <div css={{ marginBottom: "1.75rem" }}>
            <Label>Password*</Label>
            <Input
              value={password ? password : ""}
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>

          <Button type="submit">Create account</Button>
        </Form>
      </div>
    </div>
  );
};

export default SignUp;
