import React, { useState, useEffect } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { login } from "../api";

export const UserContext = React.createContext({
  doneInitialising: false,
  isLoggedIn: false,
  loginUser: () => {},
  logoutUser: () => {},
});

export const UserContainer = ({ children }) => {
  const [doneInitialising, setIsDoneInitialising] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [accessToken, setAccessToken] = useState("");

  const loginUser = async (email, password) => {
    setAccessToken(await login(email, password))
  }

  const logoutUser = () => {
    setAccessToken("");
  }

  // Set token to localstorage if it changes
  useEffect(() => {
    if (accessToken === "") {
      setIsLoggedIn(false);
      return;
    }

    (async() => {
      await AsyncStorage.setItem("token", accessToken)
      setIsLoggedIn(true);
    })();

  }, [accessToken]);

  // Pull token from localstorage on load
  useEffect(() => {
    (async() => {
      const loadedToken = await AsyncStorage.getItem("token");
      if (loadedToken) {
        setAccessToken(loadedToken);
      }

      setIsDoneInitialising(true);
    })();
  }, []);


  const contextValue = {
    doneInitialising,
    isLoggedIn,
    loginUser,
    logoutUser,
  }

  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
};
