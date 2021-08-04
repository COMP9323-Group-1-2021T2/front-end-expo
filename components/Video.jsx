import React from "react";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import { StyleSheet } from "react-native";

export const Video = ({ video, onEdit, isEditable }) => (
  <Card style={styles.container}>
    <Card.Cover source={{ uri: video.image }} />
    <Card.Content style={styles.content}>
      <Title style={styles.title}>{video.title}</Title>
      <Paragraph numberOfLines={4}>{video.description}</Paragraph>
    </Card.Content>
    <Card.Actions style={styles.actions}>
      <Button
        onPress={() => {
          window.open(video.url, "_blank");
        }}
      >
        View
      </Button>
      {isEditable && (
        <Button onPress={() => onEdit(video)}>Edit</Button>
      )}
    </Card.Actions>
  </Card>
);

const styles = StyleSheet.create({
  title: {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  container: {
    height: "100%",
  },
  content: {
    flexGrow: 1,
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  actions: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 20,
  },
});
