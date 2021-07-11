import React, { useState, useEffect } from "react";
import { getCategories } from "../api";

export const CategoriesContext = React.createContext({
  categories: [],
});

export const CategoriesContainer = ({ children }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    (async() => {
      const apiCategories = await getCategories()
      setCategories(apiCategories);
    })();
  }, []);

  const contextValue = {
    categories,
  }


  return (
    <CategoriesContext.Provider value={contextValue}>
      {children}
    </CategoriesContext.Provider>
  );
};
