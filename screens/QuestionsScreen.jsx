import React from "react";
import { View, StyleSheet } from "react-native";
import { Title } from "react-native-paper";
import { NewNavbar } from "../components/NewNavbar";

export const QuestionsScreen = ({ navigation }) => {
  return (
    <View>
      <NewNavbar />
      <View style={styles.contentContainer}>
        <Title>Questions Information Here</Title>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    marginTop: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
