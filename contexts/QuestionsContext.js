import React, { useContext, useState, useEffect } from "react";
import {
  getQuestions as apiGetQuestions,
  createQuestion as apiCreateQuestion,
} from "../api";
import { UserContext } from "./UserContext";

export const QuestionsContext = React.createContext({
  questions: [],
  createQuestion: () => {},
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

  const contextValue = {
    questions,
    createQuestion,
  };

  return (
    <QuestionsContext.Provider value={contextValue}>
      {children}
    </QuestionsContext.Provider>
  );
};
