import React, { useContext } from "react";
import { CategoriesContext } from "./contexts/CategoriesContext";
import { View, StyleSheet } from "react-native";
import { ActivityIndicator, Title } from "react-native-paper";
import { HomeScreen } from "./screens/HomeScreen";
import { InfoScreen } from "./screens/InfoScreen";
import { ArticlesScreen } from "./screens/ArticlesScreen";
import { ContactsScreen } from "./screens/ContactsScreen";
import { VideosScreen } from "./screens/VideosScreen";
import { WatsonChatbot } from "./components/WatsonChatbot";

import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

export const Main = () => {
  const { isCategoriesLoaded } = useContext(CategoriesContext);

  if (!isCategoriesLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <Title>Initialising</Title>
        <ActivityIndicator animating={true} size={40}/>
      </View>
    );
  }

  return (
    <>
      <Stack.Navigator initialRouteName={"Home"} headerMode="none">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Info" component={InfoScreen} />
        <Stack.Screen name="Articles" component={ArticlesScreen} />
        <Stack.Screen name="Videos" component={VideosScreen} />
        <Stack.Screen name="Contacts" component={ContactsScreen} />
      </Stack.Navigator>
      <WatsonChatbot />
    </>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
});
