import { createContext } from "react";

export const AuthContent = createContext(null)
const AuthData = ({children}) => {
    const data = {name: 'samio hasan', id: 2}
    return (
        <AuthContent.Provider value={data}>
            {children}
        </AuthContent.Provider>
    );
};

export default AuthData;