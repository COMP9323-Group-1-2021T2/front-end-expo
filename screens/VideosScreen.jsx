import React, { useContext, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { NewNavbar } from "../components/NewNavbar";
import { CategoriesContext } from "../contexts/CategoriesContext";
import { ContentContainer } from "../components/ContentContainer";
import { Video } from "../components/Video";
import { isMobileScreen } from "../core/screen";
import { UserContext } from "../contexts/UserContext";
import { AddCard } from "../components/AddCard";

export const VideosScreen = ({ navigation, route }) => {
  const { categoryId } = route.params;
  const { videos, setSelectedCategoryId } = useContext(CategoriesContext);
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
            <TouchableOpacity style={styles.videoContainer} onPress={() => alert('asdf')}>
              <AddCard />
            </TouchableOpacity>
          )}
          {videos.map((video) => (
            <View key={video.id} style={styles.videoContainer}>
              <Video video={video} />
            </View>
          ))}
        </View>
      </ContentContainer>
    </View>
  );
}

const largeStyles = StyleSheet.create({
  container: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  videoContainer: {
    marginBottom: 20,
    marginRight: 20,
    width: "30%",
    alignItems: "streth",
  },
});

const mobileStyles = StyleSheet.create({
  videoContainer: {
    marginBottom: 20,
    width: "100%",
  },
});
