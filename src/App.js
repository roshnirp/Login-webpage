import React, { useState, useEffect } from 'react';
import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './components/context/AuthContext';
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
   useEffect(()=> {
    const userLoggedInStatus = localStorage.getItem('isLoggedIn');
     //isLoggedIn ki value 1 yaha store karwa li 
    if(userLoggedInStatus === '1')
    {
      setIsLoggedIn(true);
    }
  },[])
  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    //localstorage stor the data in key value pair and session storage
    localStorage.setItem('isLoggedIn', '1');
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  return (
    // <React.Fragment>
      <AuthContext.Provider value={{
        isLoggedIn :isLoggedIn,
        onLogout : logoutHandler
      }}> 
        {/* hamne yaha par rap kar diya under ke sabi components ko yaha se jada provide hoga sab ke liye */}
        <MainHeader /> 
        {/* <MainHeader onLogout={logoutHandler} />  */}
      {/* <MainHeader isAuthenticated1={isLoggedIn} onLogout1={logoutHandler} />  */}
      {/* isLoggedIn is variable and logooutHandler funtn 1.MainHeader app -> mainheader->navgtn*/}
  {/*2nd main               */}
      <main>                                                          
        {!isLoggedIn && <Login onLogin={loginHandler} />}    
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
      </AuthContext.Provider>
    // </React.Fragment>
  );
}

export default App;
