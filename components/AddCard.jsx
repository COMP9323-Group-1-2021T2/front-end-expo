import React from "react";
import { Avatar, Button, Card, Title, Paragraph } from "react-native-paper";
import { View, StyleSheet } from "react-native";
import { theme } from "../core/theme";

//This component is to allow the user to add/create a new card/resource, such as an article or video

export const AddCard = () => (
  <Card style={styles.container}>
    <Card.Content style={styles.contentContainer}>
      <Title style={styles.title}>+ Add</Title>
    </Card.Content>
  </Card>
);

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
  title: {
    color: theme.colors.primary,
  },
  contentContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
});
