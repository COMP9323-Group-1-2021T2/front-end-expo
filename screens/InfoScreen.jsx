import React, { useContext, useEffect, useState } from "react";
import { View, StyleSheet, ImageBackground } from "react-native";
import { Text, Title, Subheading } from "react-native-paper";
import { NewNavbar } from "../components/NewNavbar";
import { CategoriesContext } from "../contexts/CategoriesContext";
import { ContentContainer } from "../components/ContentContainer";
import { Article } from "../components/Article";
import { isMobileScreen } from "../core/screen";

export const InfoScreen = ({ navigation, route }) => {
  const { categoryId } = route.params;
  const { info, setSelectedCategoryId, articles, videos } = useContext(
    CategoriesContext
  );
  const [shownArticles, setShownArticles] = useState([]);
  const [image, setImage] = useState("");

  let styles = largeStyles;

  if (isMobileScreen()) {
    styles = { ...styles, ...mobileStyles };
  }

  useEffect(() => {
    if (categoryId !== "") {
      setSelectedCategoryId(categoryId);
    }
  }, [route.params.categoryId]);

  useEffect(() => {
    if (articles.length !== 0) {
      setShownArticles(articles.slice(0, 3));
    }
  }, [articles]);

  useEffect(() => {
    if (videos.length !== 0) {
      const firstVideo = videos[0];
      setImage(firstVideo.image)
    }
  }, [videos]);

  return (
    <View>
      <NewNavbar />
      <ContentContainer>
        <View style={styles.container}>
          <View style={styles.top}>
            <View style={styles.left}>
              <Title style={styles.title}>General Information and Summary</Title>
              <Subheading>{info}</Subheading>
            </View>
            <View style={styles.right}>
              <ImageBackground
                source={{ uri: image }}
                style={{width: '100%', height: '100%'}}
              />
            </View>
          </View>
          <View style={styles.articlesContainer}>
            {shownArticles.map((article) => (
              <View key={article.id} style={styles.articleContainer}>
                <Article
                  article={article}
                  isEditable={false}
                  onEdit={() => {}}
                />
              </View>
            ))}
          </View>
        </View>
      </ContentContainer>
    </View>
  );
};

const largeStyles = StyleSheet.create({
  container: {
    display: "flex",
  },
  top: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 40,
  },
  left: {
    width: "49%",
    backgroundColor: "white",
    padding: 20,
  },
  right: {
    width: "49%",
    minHeight: 300,
  },
  articlesContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
   flexWrap: "wrap",
    flexDirection: "row",
  },
  articleContainer: {
    marginBottom: 20,
    width: "31%",
  },
  title: {
    marginBottom: 20,
  },
});

const mobileStyles = StyleSheet.create({
  top: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 40,
  },
  left: {
    width: "100%",
    backgroundColor: "white",
    padding: 20,
  },
  right: {
    display: "none",
    width: "100%",
  },
  articleContainer: {
    marginBottom: 20,
    width: "100%",
  },
});
