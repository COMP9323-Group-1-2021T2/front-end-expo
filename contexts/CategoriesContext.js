import React, { useState, useEffect } from "react";
import { getCategories, getCategoryInfo, getCategoryArticles, getCategoryVideos } from "../api";

export const CategoriesContext = React.createContext({
  isCategoriesLoaded: false,
  categories: [],
  categoriesMap: {},
  setSelectedCategoryId: () => {},
  articles: [],
  videos: [],
  info: "",
});

export const CategoriesContainer = ({ children }) => {
  const [isCategoriesLoaded, setIsCategoriesLoaded] = useState(false);
  const [categories, setCategories] = useState([]);
  const [categoriesMap, setCategoriesMap] = useState({});
  const [selectedCategoryId, setSelectedCategoryId] = useState({});
  const [info, setInfo] = useState("");
  const [articles, setArticles] = useState([]);
  const [videos, setVideos] = useState([]);

  // GetCategories on initial load
  useEffect(() => {
    (async() => {
      setCategories(await getCategories())
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

  useEffect(() => {
    if (categoriesMap !== {}) {
      setIsCategoriesLoaded(true);
    }
  }, [categoriesMap]);

  // get category info when selectedCategoryId updates
  useEffect(() => {
    if (selectedCategoryId === "") {
      return;
    }

    (async() => {
      setInfo(await getCategoryInfo(selectedCategoryId));
    })();
  }, [selectedCategoryId]);

  // get category articles when selectedCategoryId updates
  useEffect(() => {
    if (selectedCategoryId === "") {
      return;
    }

    (async() => {
      setArticles(await getCategoryArticles(selectedCategoryId));
    })();
  }, [selectedCategoryId]);

  // get category videos when selectedCategoryId updates
  useEffect(() => {
    if (selectedCategoryId === "") {
      return;
    }

    (async() => {
      setVideos(await getCategoryVideos(selectedCategoryId));
    })();
  }, [selectedCategoryId]);

  const contextValue = {
    setSelectedCategoryId,
    isCategoriesLoaded,
    categories,
    categoriesMap,
    info,
    videos,
    articles,
  }


  return (
    <CategoriesContext.Provider value={contextValue}>
      {children}
    </CategoriesContext.Provider>
  );
};
