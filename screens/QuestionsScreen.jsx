import React, { useContext, useState } from "react";
import { View, StyleSheet } from "react-native";
import { List, Title, Button, Modal } from "react-native-paper";
import { NewNavbar } from "../components/NewNavbar";
import { AskQuestionModal } from "../components/AskQuestionModal";
import { QuestionsContext } from "../contexts/QuestionsContext";

export const QuestionsScreen = ({ navigation }) => {
  const { questions } = useContext(QuestionsContext);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleOnModalDismiss = () => {
    setIsModalVisible(false);
  };

  const handleAskAQuestionOnPress = () => {
    setIsModalVisible(true);
  };

  const handleOnModalSubmit = (question) => {
    console.log(question);
    setIsModalVisible(false);
  };

  return (
    <View>
      <NewNavbar />
      <View style={styles.contentContainer}>
        <View style={styles.top}>
          <Title>Questions</Title>
          <Button mode="contained" onPress={handleAskAQuestionOnPress}>
            Ask a Question
          </Button>
        </View>

        <View style={styles.listContainer}>
          <List.Section>
            {questions.map((q) => (
              <List.Accordion
                key={q.id}
                style={styles.accordion}
                title={q.question}
              >
                <List.Item title={q.answer} />
              </List.Accordion>
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
  accordion: {
    backgroundColor: "white",
    marginTop: 20,
  },
  top: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
  },
  modal: {
    boxShadow: 'none',
  },
});
