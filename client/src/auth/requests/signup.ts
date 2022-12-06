import axios from "axios";
import { User, UserSignupDetails } from "../types";

type SignupResponse = {
  user: User;
  token: string;
};

export const signup = async (userDetails: UserSignupDetails) => {
  try {
    const response = await axios.post<SignupResponse>("/signup", userDetails);
    return response.data;
  } catch (error) {
    console.error("ERROR", error);
  }
};
