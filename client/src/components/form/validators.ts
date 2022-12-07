export type InputValidator = (input: string) => boolean;

const rPassword =
  /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^A-Za-z0-9]).{8,}$/;

const rEmail =
  // eslint-disable-next-line
  /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

export const isEmail = (email: string) => {
  const valid = email.match(rEmail);

  if (!valid) {
    return false;
  }
  return true;
};

export const isString = (input: string) => {
  if (input.length === 0) {
    return false;
  }
  return true;
};

export const isPassword = (password: string) => {
  const valid = password.match(rPassword);

  if (!valid) {
    return false;
  }
  return true;
};

export function allValid(inputs: Boolean[]) {
  return inputs.every((input) => input === true);
}
