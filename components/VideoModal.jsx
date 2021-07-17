import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { Title, TextInput, Button } from "react-native-paper";
import { isMobileScreen } from "../core/screen";

export const VideoModal = ({ video, onSave, onDelete }) => {
  const [modalTitle, setModalTitle] = useState("");
  const [buttonText, setButtonText] = useState("");
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");

  let styles = largeStyles;

  if (isMobileScreen()) {
    styles = { ...styles, ...mobileStyles };
  }

  useEffect(() => {
    if (video) {
      setModalTitle("Update video");
      setTitle(video.title);
      setUrl(video.url);
      setImage(video.image);
      setDescription(video.description);
      setButtonText("Update");
    } else {
      setModalTitle("Add video");
      setTitle("");
      setUrl("");
      setImage("");
      setDescription("");
      setButtonText("Create");
    }
  }, [video]);

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Title style={styles.title}>{modalTitle}</Title>
        <TextInput
          label="Title"
          mode="outlined"
          value={title}
          style={styles.input}
          onChangeText={(t) => setTitle(t)}
        />
        <TextInput
          label="Link URL"
          mode="outlined"
          value={url}
          style={styles.input}
          onChangeText={(t) => setUrl(t)}
        />
        <TextInput
          label="Image URL"
          mode="outlined"
          value={image}
          style={styles.input}
          onChangeText={(t) => setImage(t)}
        />
        <TextInput
          label="Description"
          mode="outlined"
          value={description}
          style={styles.input}
          onChangeText={(t) => setDescription(t)}
        />
        <View style={styles.buttonsContainer}>
          <Button mode="contained" onPress={onSave}>
            {buttonText}
          </Button>

          {video && (
            <Button mode="text" onPress={onDelete}>
              Delete
            </Button>
          )}
        </View>
      </View>
    </View>
  );
};

const largeStyles = StyleSheet.create({
  title: {
    marginBottom: 20,
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    width: "50%",
    backgroundColor: "white",
    padding: 30,
  },
  input: {
    marginBottom: 20,
  },
  buttonsContainer: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
  },
});

const mobileStyles = StyleSheet.create({
  content: {
    width: "90%",
    backgroundColor: "white",
    padding: 30,
  },
});