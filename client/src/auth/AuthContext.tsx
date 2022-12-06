import React, { useEffect, useState } from "react";
import { login as loginRequest } from "./requests/login";
import { signup as signupRequest } from "./requests/signup";
import { User, UserSignupDetails } from "./types";

interface AuthContextValue {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  signup: (userSignupDetails: UserSignupDetails) => Promise<void>;
}

const AuthContext = React.createContext<AuthContextValue | undefined>(
  undefined
);

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const user = window.localStorage.getItem("user");
    if (user) {
      setUser(JSON.parse(user));
    }
  }, []);

  const login = async (email: string, password: string) => {
    const data = await loginRequest(email, password);
    if (data) {
      console.log("data.user", data.user);
      setUser(data.user);
      window.localStorage.setItem("JWT", data.token);
      window.localStorage.setItem("user", JSON.stringify(data.user));
    }
  };

  const logout = () => {
    window.localStorage.removeItem("JWT");
    window.localStorage.removeItem("user");

    setUser(null);
  };

  const signup = async (userSignupDetails: UserSignupDetails) => {
    const data = await signupRequest(userSignupDetails);
    if (data) {
      console.log("data.user", data.user);
      setUser(data.user);
      window.localStorage.setItem("JWT", data.token);
      window.localStorage.setItem("user", JSON.stringify(data.user));
    }
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, signup }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  const context = React.useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return context;
};

export { AuthProvider, useAuth };
