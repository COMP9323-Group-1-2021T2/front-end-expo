import React from "react";
import { View, Text } from "react-native";
import { NewNavbar } from "../components/NewNavbar";

export const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <NewNavbar navigation={navigation} />
      <Text>Home</Text>
    </View>
  );
};