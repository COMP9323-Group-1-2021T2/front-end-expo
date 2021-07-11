import React, { useContext, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { NewNavbar } from "../components/NewNavbar";
import { CategoriesContext } from "../contexts/CategoriesContext";
import { ContentContainer } from "../components/ContentContainer";
import { Article } from "../components/Article";
import { isMobileScreen } from "../core/screen";

export const ArticlesScreen = ({ navigation, route }) => {
  const { categoryId } = route.params;
  const { articles, setSelectedCategoryId } = useContext(CategoriesContext);

  let styles = largeStyles;

  if (isMobileScreen()) {
    styles = { ...styles, ...mobileStyles };
  }

  useEffect(() => {
    if (categoryId !== "") {
      setSelectedCategoryId(categoryId);
    }
  }, [route.params.categoryId]);

  return (
    <View>
      <NewNavbar />
      <ContentContainer>
        <View style={styles.container}>
          {articles.map((article) => (
            <View key={article.id} style={styles.articleContainer}>
              <Article article={article} />
            </View>
          ))}
        </View>
      </ContentContainer>
    </View>
  );
};

const largeStyles = StyleSheet.create({
  container: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  articleContainer: {
    marginBottom: 20,
    marginRight: 20,
    width: "30%",
  },
});

const mobileStyles = StyleSheet.create({
  articleContainer: {
    marginBottom: 20,
    width: "100%",
  },
});
