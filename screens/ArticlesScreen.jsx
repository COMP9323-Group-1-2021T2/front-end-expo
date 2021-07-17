import React, { useContext, useEffect } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { NewNavbar } from "../components/NewNavbar";
import { CategoriesContext } from "../contexts/CategoriesContext";
import { ContentContainer } from "../components/ContentContainer";
import { AddCard } from "../components/AddCard";
import { Article } from "../components/Article";
import { isMobileScreen } from "../core/screen";
import { UserContext } from "../contexts/UserContext";

export const ArticlesScreen = ({ navigation, route }) => {
  const { categoryId } = route.params;
  const { articles, setSelectedCategoryId } = useContext(CategoriesContext);
  const { isLoggedIn } = useContext(UserContext);

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
          {isLoggedIn && (
            <TouchableOpacity style={styles.articleContainer} onPress={() => alert('asdf')}>
              <AddCard />
            </TouchableOpacity>
          )}
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
    alignItems: "stretch",
  },
});

const mobileStyles = StyleSheet.create({
  articleContainer: {
    marginBottom: 20,
    width: "100%",
  },
});
