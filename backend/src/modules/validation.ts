import { body, Result, ValidationError } from "express-validator";

export const signinValidator = [
  body("email").isEmail(),
  body("password").isStrongPassword(),
];

export const signupValidator = [
  body("firstName").isString(),
  body("lastName").isString(),
  body("email").isEmail(),
  body("password").isStrongPassword(),
];

export const sendErrors = (res, errors: Result<ValidationError>) => {
  res.status(400);
  res.json({ errors: errors.array() });
};

export const hasErrors = (errors: Result<ValidationError>) => {
  return !errors.isEmpty();
};
