import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const initialIsSignedIn = localStorage.getItem("isSignedIn") === "true"
    const [isSignedIn, setIsSignedIn] = useState(initialIsSignedIn)


    const signIn = () => {
        setIsSignedIn(true)
    }

    const signOut = () => {
        setIsSignedIn(false)
    }

    useEffect(() => {
        localStorage.setItem("isSignedIn", isSignedIn)
    }, [isSignedIn])

    return (
        <AuthContext.Provider value={{ isSignedIn, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)