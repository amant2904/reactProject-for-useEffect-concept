import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogin: () => { },
    onLogout: () => { }
})

const AuthContextProvider = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const loginStatus = localStorage.getItem("loggedIn");

        if (loginStatus === "1") {
            setIsLoggedIn(true);
        }
    }, [])

    const loginHandler = (email, password, college) => {
        // We should of course check email and password
        // But it's just a dummy/ demo anyways
        localStorage.setItem("loggedIn", "1");
        setIsLoggedIn(true);
    };

    const logoutHandler = () => {
        setIsLoggedIn(false);
        localStorage.removeItem("loggedIn");
    };

    return <AuthContext.Provider value={{
        isLoggedIn: isLoggedIn,
        onLogin: loginHandler,
        onLogout: logoutHandler
    }}>{props.children}</AuthContext.Provider>
}

export { AuthContextProvider };
export default AuthContext;