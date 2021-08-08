import React, { useState, useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { Title, TextInput, Button } from "react-native-paper";
import { isMobileScreen } from "../core/screen";

//This component is for the modal that allows users to ask a question by entering
//the respective text in an input box

export const AskQuestionModal = ({ onSubmit }) => {
  const [question, setQuestion] = useState("");

  let styles = largeStyles;

  if (isMobileScreen()) {
    styles = { ...styles, ...mobileStyles };
  }

  const handleOnSubmit = () => {
    onSubmit(question);
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Title style={styles.title}>Ask a Question</Title>
        <TextInput
          mode="outlined"
          value={question}
          style={styles.input}
          onChangeText={(q) => setQuestion(q)}
          numberOfLines={4}
        />
        <View style={styles.buttonsContainer}>
          <Button mode="contained" onPress={handleOnSubmit}>
            Submit
          </Button>
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
  rightButtons: {
    display: "flex",
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
