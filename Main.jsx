import React, { useContext } from "react";
import { CategoriesContext } from "./contexts/CategoriesContext";
import { View, StyleSheet } from "react-native";
import { ActivityIndicator } from "react-native-paper";
import { HomeScreen } from "./screens/HomeScreen";

import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

export const Main = () => {
  const { isCategoriesLoaded } = useContext(CategoriesContext);

  if (!isCategoriesLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator animating={true} />
      </View>
    );
  }

  return (
    <Stack.Navigator initialRouteName={"Home"} headerMode="none">
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
