import { createContext, useState } from "react";
import { useToast } from "@chakra-ui/react";
import { errorToast, successToast } from "../util/toasts";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const toast = useToast();
  const [isLogged, setIsLogged] = useState(localStorage.getItem("isLogged"));

  const navigate = useNavigate();

  const login = async (email, password) => {
    const request = await fetch("http://localhost:8080/api/v1/user/login", {
      headers: {
        Authorization: "Basic " + window.btoa(email + ":" + password),
      },
      method: "POST",
    });

    const data = await request.json();
    if (request.status === 200) {
      toast(successToast(data.message));
      setIsLogged(1);
      localStorage.setItem("isLogged", 1);
      navigate("/");
    } else {
      toast(errorToast(data.message));
    }
  };

  const register = async (
    username,
    email,
    password,
    password2,
    phoneNo,
    role
  ) => {
    if (password !== password2) {
      toast(errorToast("Passwords do not match"));
      return;
    }

    const bodyData = JSON.stringify({
      username,
      email,
      password,
      phoneNo,
      role,
    });

    const request = await fetch("http://localhost:8080/api/v1/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: bodyData,
    });

    const data = await request.json();

    if (request.status === 200) {
      toast(successToast(data.message));
      navigate("/login");
    } else {
      toast(errorToast(data.message));
    }
  };

  const logout = async () => {
    const request = await fetch("http://localhost:8080/api/v1/user/logout");
    if (request.status === 204) {
      toast(successToast("Logged out successfully"));
      setIsLogged(0);
      localStorage.setItem("isLogged", 0);
      navigate("/login");
    }
  };
  return (
    <AuthContext.Provider value={{ login, register, isLogged, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
