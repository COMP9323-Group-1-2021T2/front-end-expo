import React, { useContext, useState } from "react";
import { View, StyleSheet } from "react-native";
import { List, Title, Button, Modal } from "react-native-paper";
import { NewNavbar } from "../components/NewNavbar";
import { AskQuestionModal } from "../components/AskQuestionModal";
import { QuestionsContext } from "../contexts/QuestionsContext";
import { UserContext } from "../contexts/UserContext";
import { NotificationContext } from "../contexts/NotificationContext";
import { QuestionAccordion } from "../components/QuestionAccordion";

export const QuestionsScreen = ({ navigation }) => {
  const { questions, createQuestion, answerQuestion } = useContext(QuestionsContext);
  const { setNotification } = useContext(NotificationContext);
  const { isLoggedIn } = useContext(UserContext);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOnModalDismiss = () => {
    setIsModalVisible(false);
  };

  const handleAskAQuestionOnPress = () => {
    setIsModalVisible(true);
  };

  const handleOnModalSubmit = async (question) => {
    try {
      await createQuestion(question);
      setIsModalVisible(false);
      setNotification("Successfully submitted your question");
    } catch (e) {
      alert(e.message);
    }
  };

  const handleOnAnswerSave = async (questionId, answer) => {
    try {
      await answerQuestion(questionId, answer);
      setNotification("Successfully submitted your answer");
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <View>
      <NewNavbar />
      <View style={styles.contentContainer}>
        <View style={styles.top}>
          <Title>Questions</Title>
          {!isLoggedIn && (
            <Button mode="contained" onPress={handleAskAQuestionOnPress}>
              Ask a Question
            </Button>
          )}
        </View>

        <View style={styles.listContainer}>
          <List.Section>
            {questions.map((q) => (
              <QuestionAccordion key={q.id} question={q} isAdmin={isLoggedIn} onAnswerSave={handleOnAnswerSave} />
            ))}
          </List.Section>
        </View>
        <Modal
          style={styles.modal}
          visible={isModalVisible}
          onDismiss={handleOnModalDismiss}
        >
          <AskQuestionModal onSubmit={handleOnModalSubmit} />
        </Modal>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    paddingTop: 50,
    display: "flex",
    alignItems: "center",
    height: "100vh",
  },
  listContainer: {
    width: "80%",
  },
  top: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
  },
  modal: {
    boxShadow: "none",
  },
});
