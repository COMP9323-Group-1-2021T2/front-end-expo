import React, { useState } from "react";
import {
  List,
  Chip,
  Button,
  TextInput,
  Paragraph,
  IconButton,
  Title,
} from "react-native-paper";
import { StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

//This component is used to display the answer to a question, with the options "save" answer and "delete" answer,
//which, of course, are only available to admins. If a question is answered, the green admin tick will appear beside it
//to indicate this

export const QuestionAccordion = ({
  question,
  isAdmin,
  onAnswerSave,
  onDelete,
}) => {
  const [answer, setAnswer] = useState(question.answer);
  const isAnswered = question.answer && isAdmin;

  const handleOnAnswerSave = () => {
    onAnswerSave(question.id, answer);
  };

  const handleOnDelete = () => {
    if (window.confirm("Are you sure you want to delete this question?")) {
      onDelete(question.id);
    }
  };

  let additionalProps = {};

  // if (isAdmin) {
  //   additionalProps = {
  //     left: (props) =>
  //       withCheckIcon ? <List.Icon {...props} icon="check" /> : null,
  //   };
  // }

  return (
    <List.Accordion
      style={[styles.accordion, isAnswered ? styles.adminAnswered : {}]}
      title={
        <View style={styles.title}>
          {question.answer && (
            <Icon style={styles.checkIcon} name="check-circle" size={25} />
          )}
          <Title>{question.question}</Title>
        </View>
      }
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
            numberOfLines={3}
            multiline
          />
          <View style={styles.buttons}>
            <Button mode="text" onPress={handleOnAnswerSave}>
              Save
            </Button>
            <Button mode="text" onPress={handleOnDelete}>
              Delete
            </Button>
          </View>
        </View>
      ) : (
        <View style={styles.answer}>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Paragraph style={{ color: "#00A550" }}>
              Answered by Verified Expert
            </Paragraph>
          </View>
          <Paragraph>{question.answer}</Paragraph>
        </View>
      )}
    </List.Accordion>
  );
};

const styles = StyleSheet.create({
  title: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  checkIcon: {
    color: "#00A550",
    marginRight: 20,
  },
  accordion: {
    backgroundColor: "white",
    marginTop: 20,
  },
  adminItemContainer: {
    paddingVertical: 20,
    backgroundColor: "white",
  },
  adminInput: {
    backgroundColor: "white",
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  answer: {
    padding: 10,
  },
  buttons: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});
