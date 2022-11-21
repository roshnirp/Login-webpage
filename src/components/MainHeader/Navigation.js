import React,{ useContext } from 'react';
import classes from './Navigation.module.css';
import AuthContext from '../context/AuthContext';
const Navigation = () => { 
  const context = useContext(AuthContext); 
  //app -> mainheader->navgtn
  return (
    // <AuthContext.Consumer>
    //   {/* //consumer ye ek function return karta he  */}
    //  {(context) => {
    //   return(
        <nav className={classes.nav}>
        <ul>
          {context.isLoggedIn && (
            <li>
              <a href="/">Users</a>
            </li>
          )}
          {context.isLoggedIn && (
            <li>
              <a href="/">Admin</a>
            </li>
          )}
          {context.isLoggedIn && (
            <li>
              <button onClick={context.onLogout}>Logout</button>
            </li>
          )}
        </ul>
      </nav>
    //  )
    //  }}
    
    // </AuthContext.Consumer>
  );
};

export default Navigation;
