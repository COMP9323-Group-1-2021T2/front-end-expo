import React, { useContext, useState, useEffect } from "react";
import { Snackbar } from "react-native-paper";

export const NotificationContext = React.createContext({
  questions: [],
  createQuestion: () => {},
});

export const NotificationContainer = ({ children }) => {
  const [message, setMessage] = useState("");
  const [visible, setVisible] = useState(false);

  const setNotification = (newMessage) => {
    setMessage(newMessage);
  };

  useEffect(() => {
    if (message === "") {
      return;
    }

    setVisible(true);
  }, [message]);

  const contextValue = {
    setNotification,
  };

  const handleOnDismiss = () => {
    setVisible(false);
    setMessage("");
  };

  return (
    <NotificationContext.Provider value={contextValue}>
      {children}
      <Snackbar visible={visible} onDismiss={handleOnDismiss} duration={3000}>
        {message}
      </Snackbar>
    </NotificationContext.Provider>
  );
};
