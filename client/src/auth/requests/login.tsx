import axios from "axios";
import { User } from "../types";

type LoginResponse = {
  user: User;
  token: string;
};

export const login = async (email: string, password: string) => {
  try {
    const response = await axios.post<LoginResponse>(
      "http://localhost:3001/signin",
      {
        email,
        password,
      }
    );

    return response.data;
  } catch (error) {
    console.error("ERROR", error);
  }
};
