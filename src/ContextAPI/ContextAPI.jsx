import { createContext, useContext, useEffect, useState } from "react";

import Swal from "sweetalert2";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [loggedUser, setLoggedUser] = useState(null);
  const [loginError, setLoginError] = useState("");
  const [loading, setLoading] = useState(false);

  const login = (loginInfo) => {
    setLoading(true);

    fetch(`${import.meta.env.VITE_BACKEND_URL}/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data?.success) {
          setLoginError(data.message);
        }
        if (data?.success) {
          localStorage.setItem("rahimafrox-solar-jwt", data?.token);
          setLoggedUser(data?.data);
          setLoginError("");
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Login Success",
            showConfirmButton: false,
            timer: 1000,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  // Get Logged user
  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/user/me`, {
      headers: {
        authorization: `bearer ${localStorage.getItem("rahimafrox-solar-jwt")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data?.success) {
          setLoggedUser(data?.data);
        }
      });
  }, []);

  const contextInfo = {
    loggedUser,
    setLoggedUser,
    login,
    loginError,
    loading,
  };
  return <Context.Provider value={contextInfo}>{children}</Context.Provider>;
};

export const UseContext = () => {
  const context = useContext(Context);
  return context;
};

export default ContextProvider;
