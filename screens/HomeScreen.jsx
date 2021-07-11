import React from "react";
import { View, Text } from "react-native";
import { NewNavbar } from "../components/NewNavbar";

export const HomeScreen = () => {
  return (
    <View>
      <NewNavbar />
      <Text>Home</Text>
    </View>
  );
};
