import React, { useState } from "react";
import { List, Title, Button, Modal, TextInput } from "react-native-paper";
import { StyleSheet, View } from "react-native";

export const QuestionAccordion = ({ question, isAdmin, onAnswerSave }) => {
  const [answer, setAnswer] = useState(question.answer);
  const withCheckIcon = question.answer && isAdmin;

  const handleOnAnswerSave = () => {
    onAnswerSave(question.id, answer)
  };

  return (
    <List.Accordion
      style={styles.accordion}
      title={question.question}
      left={(props) => withCheckIcon ? <List.Icon {...props} icon="check" /> : null}
    >
      {isAdmin ? (
        <View style={styles.adminItemContainer}>
          <TextInput
            label="Answer"
            mode="outlined"
            value={answer}
            style={styles.adminInput}
            onChangeText={(a) => setAnswer(a)}
            numberOfLines={4}
          />
          <Button mode="text" onPress={handleOnAnswerSave}>
              Save
            </Button>
        </View>
      ) : (
        <List.Item title={question.answer} />
      )}
    </List.Accordion>
  );
};

const styles = StyleSheet.create({
  accordion: {
    backgroundColor: "white",
    marginTop: 20,
  },
  adminItemContainer: {
    paddingVertical: 20,
    backgroundColor: "white",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  adminInput: {
    backgroundColor: "white",
    flexGrow: 1,
  },
});
