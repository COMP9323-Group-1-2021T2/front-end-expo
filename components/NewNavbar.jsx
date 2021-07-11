import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Headline } from "react-native-paper";
import { theme } from "../core/theme";
import { CategoriesContext } from "../contexts/CategoriesContext";

export const NewNavbar = () => {
  const { categoriesMap } = useContext(CategoriesContext);
  const parentIds = Object.keys(categoriesMap);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Headline>myWellbeing</Headline>
      </View>
      <View style={styles.menus}>
        {parentIds.map((pId) => {
          return (
            <View key={pId} style={styles.menuItem}>
              <Headline>{pId}</Headline>
            </View>
          )
        })}
      </View>
      <View style={styles.getHelpContainer}>
        <Headline style={styles.getHelpText}>Get Help Now</Headline>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
  },
  menus: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    flexGrow: 1,
  },
  titleContainer: {
    padding: 10,
    borderRightWidth: 2,
    borderRightColor: "black",
  },
  menuItem: {
    padding: 10,
  },
  getHelpContainer: {
    padding: 10,
    backgroundColor: theme.colors.primary,
  },
  getHelpText: {
    color: "white",
  },
});
