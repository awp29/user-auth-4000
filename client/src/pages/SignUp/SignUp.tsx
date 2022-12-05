/** @jsxImportSource @emotion/react */

import { AppTitle, Button, SecondaryButton } from "../../components";
import { Form, Input, Label } from "../../components/form";

const SignUp: React.FC = () => {
  return (
    <div>
      <div
        css={{
          display: "flex",
          justifyContent: "space-between",
          padding: "1.5rem 1rem",
          marginBottom: "4rem",
        }}
      >
        <AppTitle />

        <SecondaryButton onClick={() => console.log("log in")}>
          Log in
        </SecondaryButton>
      </div>

      <div css={{ padding: "0 1rem" }}>
        <h1 css={{ fontWeight: "bold", marginBottom: "2rem" }}>Sign up</h1>

        <Form
          onSubmit={(e) => {
            e.preventDefault();

            console.log("submit");
          }}
        >
          <div
            css={{ display: "flex", width: "100%", marginBottom: "1.25rem" }}
          >
            <div css={{ marginRight: "12px", flex: 1 }}>
              <Label>First name*</Label>
              <Input value="" onChange={() => console.log("change")} />
            </div>

            <div css={{ marginLeft: "12px", flex: 1 }}>
              <Label>Last name*</Label>
              <Input value="" onChange={() => console.log("change")} />
            </div>
          </div>

          <div css={{ marginBottom: "1.25rem" }}>
            <Label>Email*</Label>
            <Input
              value=""
              placeholder="Email address"
              onChange={() => console.log("change")}
            />
          </div>

          <div css={{ marginBottom: "1.75rem" }}>
            <Label>Password*</Label>
            <Input
              value=""
              placeholder="Password"
              onChange={() => console.log("change")}
            />
          </div>

          <Button type="submit">Create account</Button>
        </Form>
      </div>
    </div>
  );
};

export default SignUp;
