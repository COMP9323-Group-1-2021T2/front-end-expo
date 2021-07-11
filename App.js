import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { Main } from "./Main";
import { NavigationContainer, LinkingOptions } from "@react-navigation/native";
import { CategoriesContainer } from "./contexts/CategoriesContext";
import { theme } from "./core/theme";

const config = {
  screens: {
    Home: "",
  },
};

const linking: LinkingOptions = {
  config,
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer linking={linking}>
        <CategoriesContainer>
          <Main />
        </CategoriesContainer>
      </NavigationContainer>
    </PaperProvider>
  );
}
