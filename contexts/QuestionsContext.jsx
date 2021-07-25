import React, { useContext, useState, useEffect } from "react";
import {
  getQuestions as apiGetQuestions,
  createQuestion as apiCreateQuestion,
  answerQuestion as apiAnswerQuestion,
} from "../api";
import { UserContext } from "./UserContext";

export const QuestionsContext = React.createContext({
  questions: [],
  createQuestion: () => {},
  answerQuestion: (questionId, answer) => {}
});

export const QuestionsContainer = ({ children }) => {
  const [questions, setQuestions] = useState([]);
  const { accessToken } = useContext(UserContext);

  useEffect(() => {
    (async () => {
      setQuestions(await apiGetQuestions(accessToken));
    })();
  }, [accessToken]);

  const createQuestion = async (question) => {
    await apiCreateQuestion(question);
    return;
  };

  const answerQuestion = async(questionId, answer) => {
    await apiAnswerQuestion(accessToken, questionId, answer);
    // refetch questions
    setQuestions(await apiGetQuestions(accessToken));

    return;
  };

  const contextValue = {
    questions,
    createQuestion,
    answerQuestion,
  };

  return (
    <QuestionsContext.Provider value={contextValue}>
      {children}
    </QuestionsContext.Provider>
  );
};
