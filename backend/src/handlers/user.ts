import prisma from "../db";
import { comparePasswords, createJWT, hashPassword } from "../modules/auth";

export const signup = async (req, res, next) => {
  try {
    const { body } = req;

    const user = await prisma.user.create({
      data: {
        firstName: body.firstName,
        lastName: body.lastName,
        email: body.email,
        password: await hashPassword(body.password),
      },
    });

    const token = createJWT(user);
    res.json({
      user: {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      },
      token,
    });
  } catch (error) {
    error.type = "input";
    next(error);
  }
};

export const signin = async (req, res, next) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: req.body.email,
      },
    });

    const isValid = await comparePasswords(req.body.password, user.password);

    if (!isValid) {
      res.status(401);
      res.json({ message: "nope" });
      return;
    }

    const token = createJWT(user);
    res.json({
      user: {
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
      },
      token,
    });
  } catch (error) {
    error.type = "input";
    next(error);
  }
};
