import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { Main } from "./Main";
import { NavigationContainer } from "@react-navigation/native";
import { CategoriesContainer } from "./contexts/CategoriesContext";
import { QuestionsContainer } from "./contexts/QuestionsContext";
import { UserContainer } from "./contexts/UserContext";
import { theme } from "./core/theme";

const config = {
  screens: {
    Home: "",
    Contacts: "contacts",
    Login: "login",
    Questions: "questions",
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
        <UserContainer>
          <QuestionsContainer>
            <CategoriesContainer>
              <Main />
            </CategoriesContainer>
          </QuestionsContainer>
        </UserContainer>
      </NavigationContainer>
    </PaperProvider>
  );
}
