import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const initialIsSignedIn = localStorage.getItem("isSignedIn") === "true";
  const initialToken = localStorage.getItem("token") || null;
  const initialUserEmail = localStorage.getItem("userEmail") || "";

  const [isSignedIn, setIsSignedIn] = useState(initialIsSignedIn);
  const [token, setToken] = useState(initialToken);
  const [userEmail, setUserEmail] = useState(initialUserEmail);

  const signIn = (userToken, userEmail) => {
    console.log("signIn function called with token and email:", userToken, userEmail);
    setIsSignedIn(true);
    setToken(userToken);
    setUserEmail(userEmail)
    localStorage.setItem("userEmail", userEmail)
  };

  const signOut = () => {
    setIsSignedIn(false);
    setToken(null);
    setUserEmail(null)
    localStorage.removeItem("userEmail")
  };

  useEffect(() => {
    localStorage.setItem("isSignedIn", isSignedIn);
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  }, [isSignedIn, token]);

  return (
    <AuthContext.Provider value={{ isSignedIn, token, signIn, signOut, userEmail }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
