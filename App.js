import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { Main } from "./Main";
import { NavigationContainer, LinkingOptions } from "@react-navigation/native";
import { CategoriesContainer } from "./contexts/CategoriesContext";
import { UserContainer } from "./contexts/UserContext";
import { theme } from "./core/theme";

const config = {
  screens: {
    Home: "",
    Contacts: "contacts",
    Info: ":categoryId",
    Articles: ":categoryId/articles",
    Videos: ":categoryId/videos",
  },
};

const linking: LinkingOptions = {
  config,
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer linking={linking}>
        <UserContainer>
          <CategoriesContainer>
            <Main />
          </CategoriesContainer>
        </UserContainer>
      </NavigationContainer>
    </PaperProvider>
  );
}
