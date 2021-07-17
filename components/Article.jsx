import React from "react";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import { StyleSheet } from "react-native";

export const Article = ({ article, onEdit, isEditable }) => (
  <Card style={styles.container}>
    <Card.Cover source={{ uri: article.image }} />
    <Card.Content style={styles.content}>
      <Title style={styles.title}>{article.title}</Title>
      <Paragraph numberOfLines={3}>{article.description}</Paragraph>
    </Card.Content>
    <Card.Actions>
      <Button
        onPress={() => {
          window.open(article.url, "_blank");
        }}
      >
        View
      </Button>
      {isEditable && (
        <Button onPress={() => onEdit(article)}>Edit</Button>
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
  },
});
