import React, { useContext, useState } from "react";
import { View, StyleSheet } from "react-native";
import { List, Title, Button, Modal } from "react-native-paper";
import { NewNavbar } from "../components/NewNavbar";
import { AskQuestionModal } from "../components/AskQuestionModal";
import { QuestionsContext } from "../contexts/QuestionsContext";
import { UserContext } from "../contexts/UserContext";
import { NotificationContext } from "../contexts/NotificationContext";
import { QuestionAccordion } from "../components/QuestionAccordion";
import ScrollBox from "react-responsive-scrollbox";
import { isMobileScreen } from "../core/screen";


export const QuestionsScreen = ({ navigation }) => {
  const { questions, createQuestion, answerQuestion } = useContext(QuestionsContext);
  const { setNotification } = useContext(NotificationContext);
  const { isLoggedIn } = useContext(UserContext);

  const [isModalVisible, setIsModalVisible] = useState(false);

  let styles = largeStyles;
  const isMobile = isMobileScreen();

  if (isMobile) {
    styles = { ...styles, ...mobileStyles };
  }

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
      setNotification("Failed to submitted your question");
    }
  };

  const handleOnAnswerSave = async (questionId, answer) => {
    try {
      await answerQuestion(questionId, answer);
      setNotification("Successfully submitted your answer");
    } catch (e) {
      setNotification("Failed to submit your answer");
    }
  };

  return (
    <View>
      <NewNavbar />
      <ScrollBox style={{height:'80vh', width:'80vw', margin:'auto'}}> 
          <View style={{paddingBottom:'20vh'}}>
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
        </ScrollBox>
    </View>
  );
};

const largeStyles = StyleSheet.create({
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

const mobileStyles = StyleSheet.create({
  top: {
    display: "flex",
    flexdirection: "column",
    alignItems: "flex-start",
    width: "100%",
  },
  listContainer: {
    width: "100%",
  },
});
