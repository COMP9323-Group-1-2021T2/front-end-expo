import React, { useState, useEffect } from "react";
import { getCategories, getCategoryInfo, getCategoryArticles, getCategoryVideos } from "../api";

export const UserContext = React.createContext({
  doneInitialising: false,
});

export const UserContainer = ({ children }) => {
  const [doneInitialising, setIsDoneInitialising] = useState(false);

  const contextValue = {
    doneInitialising,
  }

  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
};
