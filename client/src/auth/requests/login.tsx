import axios from "axios";
import { User } from "../types";

type LoginResponse = {
  user: User;
  token: string;
};

export const login = async (email: string, password: string) => {
  console.log("BASE URL", axios.defaults.baseURL);

  try {
    const response = await axios.post<LoginResponse>("/signin", {
      email,
      password,
    });

    return response.data;
  } catch (error) {
    console.error("ERROR", error);
  }
};
