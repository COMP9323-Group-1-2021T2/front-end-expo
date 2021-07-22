import React, { useContext, useState, useEffect } from "react";
import { getQuestions as apiGetQuestions } from "../api";
import { UserContext } from "./UserContext";

export const QuestionsContext = React.createContext({
  questions: [],
});

export const QuestionsContainer = ({ children }) => {
  const [questions, setQuestions] = useState([]);
  const { accessToken } = useContext(UserContext);

  useEffect(() => {
    (async () => {
      setQuestions(await apiGetQuestions(accessToken))
    })();
  }, [accessToken])

  const contextValue = {
    questions,
  };

  return (
    <QuestionsContext.Provider value={contextValue}>
      {children}
    </QuestionsContext.Provider>
  );
};
