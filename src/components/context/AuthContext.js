//context ka use karenge taki bar bar hame props ki changing use na karna pade jo ki ham
//App se MainHeader se Navigation me data le ja rahe he  
import React from "react";
const AuthContext = React.createContext({
    isLoggedIn : false,
    onLogout : () => {}
}); 
export default AuthContext;