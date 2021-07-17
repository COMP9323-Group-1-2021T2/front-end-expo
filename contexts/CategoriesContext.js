import React, { useContext, useState, useEffect } from "react";
import {
  getCategories,
  getCategoryInfo,
  getCategoryArticles,
  getCategoryVideos,
  createVideo as apiCreateVideo,
  updateVideo as apiUpdateVideo,
} from "../api";
import { UserContext } from "./UserContext";

export const CategoriesContext = React.createContext({
  isCategoriesLoaded: false,
  categories: [],
  categoriesMap: {},
  setSelectedCategoryId: () => {},
  articles: [],
  videos: [],
  info: "",
  createVideo: () => Promise.resolve(),
  updateVideo: () => Promise.resolve(),
  createArticle: () => Promise.resolve(),
  updateArticle: () => Promise.resolve(),
});

export const CategoriesContainer = ({ children }) => {
  const [isCategoriesLoaded, setIsCategoriesLoaded] = useState(false);
  const [categories, setCategories] = useState([]);
  const [categoriesMap, setCategoriesMap] = useState({});
  const [selectedCategoryId, setSelectedCategoryId] = useState("");
  const [info, setInfo] = useState("");
  const [articles, setArticles] = useState([]);
  const [videos, setVideos] = useState([]);

  const { accessToken } = useContext(UserContext);

  // GetCategories on initial load
  useEffect(() => {
    (async () => {
      setCategories(await getCategories());
      setIsCategoriesLoaded(true);
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
        };
      } else {
        cm[category.parent_id].subCategories.push({
          id: category.id,
          name: category.name,
        });
      }
    });

    setCategoriesMap(cm);
  }, [categories]);

  // get category info when selectedCategoryId updates
  useEffect(() => {
    if (selectedCategoryId === "") {
      return;
    }

    (async () => {
      setInfo(await getCategoryInfo(selectedCategoryId));
    })();
  }, [selectedCategoryId]);

  // get category articles when selectedCategoryId updates
  useEffect(() => {
    if (selectedCategoryId === "") {
      return;
    }

    (async () => {
      setArticles(await getCategoryArticles(selectedCategoryId));
    })();
  }, [selectedCategoryId]);

  // get category videos when selectedCategoryId updates
  useEffect(() => {
    if (selectedCategoryId === "") {
      return;
    }

    (async () => {
      setVideos(await getCategoryVideos(selectedCategoryId));
    })();
  }, [selectedCategoryId]);

  const createVideo = async ({ title, url, image, description }) => {
    await apiCreateVideo(
      accessToken,
      selectedCategoryId,
      title,
      url,
      image,
      description
    );

    setVideos(await getCategoryVideos(selectedCategoryId));
  };

  const updateVideo = async ({ videoId, title, url, image, description }) => {
    await apiUpdateVideo(
      accessToken,
      selectedCategoryId,
      videoId,
      title,
      url,
      image,
      description
    );

    setVideos(await getCategoryVideos(selectedCategoryId));
  };

  const createArticle = async ({ title, url, image, description }) => {
    await apiCreateArticle(
      accessToken,
      selectedCategoryId,
      title,
      url,
      image,
      description
    );

    setArticle(await getCategoryArticles(selectedCategoryId));
  };

  const updateArticle = async ({
    articleId,
    title,
    url,
    image,
    description,
  }) => {
    await apiUpdateArticle(
      accessToken,
      selectedCategoryId,
      articleId,
      title,
      url,
      image,
      description
    );

    setArticle(await getCategoryArticles(selectedCategoryId));
  };

  const contextValue = {
    setSelectedCategoryId,
    isCategoriesLoaded,
    categories,
    categoriesMap,
    info,
    videos,
    articles,
    createVideo,
    updateVideo,
    createArticle,
    updateArticle,
  };

  return (
    <CategoriesContext.Provider value={contextValue}>
      {children}
    </CategoriesContext.Provider>
  );
};
