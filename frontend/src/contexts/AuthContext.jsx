import { createContext, useContext, useState } from "react";

const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [isSignedIn, setIsSignedIn] = useState(false)

    const signIn = () => {
        setIsSignedIn(true)
    }

    const signOut = () => {
        setIsSignedIn(false)
    }

    return (
        <AuthContext.Provider value={{ isSignedIn, signIn, signOut }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)