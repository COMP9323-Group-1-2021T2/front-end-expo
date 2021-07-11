import React from "react";
import { View, Text } from "react-native";
import { NewNavbar } from "../components/NewNavbar";

export const VideosScreen = () => {
  return (
    <View>
      <NewNavbar navigation={navigation} />
      <Text>Videos Screen</Text>
    </View>
  );
}
