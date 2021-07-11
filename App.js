import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { Main } from "./Main";
import { NavigationContainer, LinkingOptions } from "@react-navigation/native";
import { CategoriesContainer } from "./contexts/CategoriesContext";

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
    <PaperProvider>
      <NavigationContainer linking={linking}>
        <CategoriesContainer>
          <Main />
        </CategoriesContainer>
      </NavigationContainer>
    </PaperProvider>
  );
}
