import React, { useContext, useEffect }  from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import { NewNavbar } from "../components/NewNavbar";

export const ContactsScreen = () => {
  return (
    <View>
      <NewNavbar />
        <View style={styles.container}>
          <Text>Contact</Text>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      },
});
