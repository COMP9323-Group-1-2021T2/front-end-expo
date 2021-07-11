import React, { useContext, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import { NewNavbar } from "../components/NewNavbar";
import { CategoriesContext } from "../contexts/CategoriesContext";
import { ContentContainer } from "../components/ContentContainer";
import { Video } from "../components/Video";
import { isMobileScreen } from "../core/screen";

export const VideosScreen = ({ navigation, route }) => {
  const { categoryId } = route.params;
  const { videos, setSelectedCategoryId } = useContext(CategoriesContext);

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
  },
});

const mobileStyles = StyleSheet.create({
  videoContainer: {
    marginBottom: 20,
    width: "100%",
  },
});
