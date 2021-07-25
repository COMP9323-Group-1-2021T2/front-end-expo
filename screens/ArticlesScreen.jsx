import React, { useContext, useEffect, useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Modal } from "react-native-paper";
import { NewNavbar } from "../components/NewNavbar";
import { CategoriesContext } from "../contexts/CategoriesContext";
import { NotificationContext } from "../contexts/NotificationContext";
import { ContentContainer } from "../components/ContentContainer";
import { AddCard } from "../components/AddCard";
import { Article } from "../components/Article";
import { isMobileScreen } from "../core/screen";
import { UserContext } from "../contexts/UserContext";
import { ArticleModal } from "../components/ArticleModal";

export const ArticlesScreen = ({ navigation, route }) => {
  const { categoryId } = route.params;
  const {
    articles,
    setSelectedCategoryId,
    createArticle,
    updateArticle,
    deleteArticle,
  } = useContext(CategoriesContext);
  const { isLoggedIn } = useContext(UserContext);
  const { setNotification } = useContext(NotificationContext);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(undefined);

  let styles = largeStyles;

  if (isMobileScreen()) {
    styles = { ...styles, ...mobileStyles };
  }

  useEffect(() => {
    if (categoryId !== "") {
      setSelectedCategoryId(categoryId);
    }
  }, [route.params.categoryId]);

  const handleOnAdd = () => {
    setSelectedArticle(undefined);
    setIsModalVisible(true);
  };

  const handleOnEdit = (article) => {
    setSelectedArticle(article);
    setIsModalVisible(true);
  };

  const handleOnModalDismiss = () => {
    setSelectedArticle(undefined);
    setIsModalVisible(false);
  };

  const handleOnDelete = async () => {
    try {
      await deleteArticle(selectedArticle.id);
      handleOnModalDismiss();
      setNotification("Successfully deleted the article");
    } catch (e) {
      setNotification("Failed to delete the article");
    }
  };

  const handleOnSave = async ({ title, url, image, description }) => {
    try {
      if (selectedArticle) {
        await updateArticle({
          articleId: selectedArticle.id,
          title,
          url,
          image,
          description,
        });
        setNotification("Successfully updated the article");
      } else {
        await createArticle({
          title,
          url,
          image,
          description,
        });
        setNotification("Successfully added an article");
      }

      handleOnModalDismiss();
    } catch (e) {
      setNotification("Failed to save an article");
    }
  };

  return (
    <View>
      <NewNavbar />
      <ContentContainer>
        <View style={styles.container}>
          {isLoggedIn && (
            <TouchableOpacity
              style={styles.articleContainer}
              onPress={handleOnAdd}
            >
              <AddCard />
            </TouchableOpacity>
          )}
          {articles.map((article) => (
            <View key={article.id} style={styles.articleContainer}>
              <Article
                article={article}
                isEditable={isLoggedIn}
                onEdit={handleOnEdit}
              />
            </View>
          ))}
        </View>
      </ContentContainer>

      <Modal
        style={styles.modal}
        visible={isModalVisible}
        onDismiss={handleOnModalDismiss}
      >
        <ArticleModal
          article={selectedArticle}
          onDelete={handleOnDelete}
          onSave={handleOnSave}
          onCancel={handleOnModalDismiss}
        />
      </Modal>
    </View>
  );
};

const largeStyles = StyleSheet.create({
  container: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
  },
  articleContainer: {
    marginBottom: 20,
    marginRight: 20,
    width: "31%",
    alignItems: "stretch",
  },
  modal: {
    display: "flex",
    width: "100%",
  },
});

const mobileStyles = StyleSheet.create({
  articleContainer: {
    marginBottom: 20,
    width: "100%",
  },
});
