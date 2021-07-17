import React, { useContext, useEffect, useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Modal, Text } from "react-native-paper";
import { NewNavbar } from "../components/NewNavbar";
import { CategoriesContext } from "../contexts/CategoriesContext";
import { ContentContainer } from "../components/ContentContainer";
import { Video } from "../components/Video";
import { isMobileScreen } from "../core/screen";
import { UserContext } from "../contexts/UserContext";
import { AddCard } from "../components/AddCard";
import { VideoModal } from "../components/VideoModal";

export const VideosScreen = ({ navigation, route }) => {
  const { categoryId } = route.params;
  const { videos, setSelectedCategoryId } = useContext(CategoriesContext);
  const { isLoggedIn } = useContext(UserContext);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(undefined);

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
    setSelectedVideo(undefined);
    setIsModalVisible(true);
  };

  const handleOnEdit = (video) => {
    setSelectedVideo(video);
    setIsModalVisible(true);
  };

  const handleOnModalDismiss = () => {
    setSelectedVideo(undefined);
    setIsModalVisible(false);
  };

  return (
    <View>
      <NewNavbar />
      <ContentContainer>
        <View style={styles.container}>
          {isLoggedIn && (
            <TouchableOpacity
              style={styles.videoContainer}
              onPress={handleOnAdd}
            >
              <AddCard />
            </TouchableOpacity>
          )}
          {videos.map((video) => (
            <View key={video.id} style={styles.videoContainer}>
              <Video
                video={video}
                isEditable={isLoggedIn}
                onEdit={handleOnEdit}
              />
            </View>
          ))}
        </View>
      </ContentContainer>

      <Modal style={styles.modal} visible={isModalVisible} onDismiss={handleOnModalDismiss}>
        <VideoModal video={selectedVideo} />
      </Modal>
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
  videoContainer: {
    marginBottom: 20,
    marginRight: 20,
    width: "30%",
    alignItems: "streth",
  },
  modal: {
    display: "flex",
    width: "100%",
  },
});

const mobileStyles = StyleSheet.create({
  videoContainer: {
    marginBottom: 20,
    width: "100%",
  },
});
