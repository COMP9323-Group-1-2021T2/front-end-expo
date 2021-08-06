import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { Main } from "./Main";
import { NavigationContainer } from "@react-navigation/native";
import { CategoriesContainer } from "./contexts/CategoriesContext";
import { QuestionsContainer } from "./contexts/QuestionsContext";
import { NotificationContainer } from "./contexts/NotificationContext";
import { UserContainer } from "./contexts/UserContext";
import { theme } from "./core/theme";

const config = {
  screens: {
    Home: "",
    Contacts: "contacts",
    Login: "login",
    Questions: "questions",
    Experts: "experts",
    Info: ":categoryId",
    Articles: ":categoryId/articles",
    Videos: ":categoryId/videos",
  },
};

const linking = {
  config,
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer linking={linking}>
        <NotificationContainer>
          <UserContainer>
            <QuestionsContainer>
              <CategoriesContainer>
                <Main />
              </CategoriesContainer>
            </QuestionsContainer>
          </UserContainer>
        </NotificationContainer>
      </NavigationContainer>
    </PaperProvider>
  );
}
