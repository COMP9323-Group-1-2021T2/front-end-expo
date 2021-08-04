import React, { useState } from "react";
import {
  List,
  Chip,
  Button,
  TextInput,
  Paragraph,
  IconButton,
} from "react-native-paper";
import { StyleSheet, View } from "react-native";

export const QuestionAccordion = ({ question, isAdmin, onAnswerSave }) => {
  const [answer, setAnswer] = useState(question.answer);
  const withCheckIcon = question.answer && isAdmin;

  const handleOnAnswerSave = () => {
    onAnswerSave(question.id, answer);
  };

  let additionalProps = {};

  if (isAdmin) {
    additionalProps = {
      left: (props) =>
        withCheckIcon ? <List.Icon {...props} icon="check" /> : null,
    };
  }

  return (
    <List.Accordion
      style={styles.accordion}
      title={question.question}
      {...additionalProps}
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
        <View style={styles.answer}>
          <View style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
            <IconButton icon="check" color={"#00A550"} size={20} />
            <Paragraph style={{ color: "#00A550" }}>Answered by Verified Expert</Paragraph>
          </View>
          <Paragraph>{question.answer}</Paragraph>
        </View>
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
  answer: {
    padding: 10,
  },
});
