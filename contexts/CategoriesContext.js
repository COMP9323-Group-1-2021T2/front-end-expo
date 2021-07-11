import React, { useState, useEffect } from "react";
import { getCategories } from "../api";

export const CategoriesContext = React.createContext({
  categories: [],
});

export const CategoriesContainer = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(() => {
    (async() => {
      const apiCategories = await getCategories()
      setCategories(apiCategories);
    })();
  }, []);

  useEffect(() => {
    if (categories.length === 0) {
      return;
    }

    const cm = {};

    categories.forEach((category) => {
      if (category.parent_id === null) {
        cm[category.id] = {
          name: category.name,
          subCategories: [],
        }
      } else {
        cm[category.parent_id].subCategories.push({
          id: category.id,
          name: category.name,
        });
      }
    });

    setCategoriesMap(cm);
  }, [categories]);

  const contextValue = {
    categories,
  }


  return (
    <CategoriesContext.Provider value={contextValue}>
      {children}
    </CategoriesContext.Provider>
  );
};
