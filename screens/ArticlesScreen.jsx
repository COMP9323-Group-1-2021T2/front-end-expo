import React from "react";
import { View, Text } from "react-native";
import { NewNavbar } from "../components/NewNavbar";

export const ArticlesScreen = () => {
  return (
    <View>
      <NewNavbar navigation={navigation} />
      <Text>Articles Screen</Text>
    </View>
  );
};
