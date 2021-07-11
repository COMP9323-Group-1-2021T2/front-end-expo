import React, { useContext, useState } from "react";
import { View, StyleSheet } from "react-native";
import { Headline, Menu, Divider, Title } from "react-native-paper";
import { theme } from "../core/theme";
import { CategoriesContext } from "../contexts/CategoriesContext";
import { useNavigation } from '@react-navigation/native';

export const NewNavbar = () => {
  const navigation = useNavigation();
  const { categoriesMap } = useContext(CategoriesContext);
  const parentIds = Object.keys(categoriesMap);
  const [parentSelected, setParentSelected] = useState("");

  const handleCategoryOnSelect = (categoryId) => {
    setParentSelected("");
    navigation.navigate("Info", {
      categoryId,
    });
  };

  const handleTalkToOurAssistant = () => {};

  const handleOnTitlePress = () => {
    setParentSelected("");
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Headline onPress={handleOnTitlePress}>myWellbeing</Headline>
      </View>
      <View style={styles.menus}>
        {parentIds.map((pId) => {
          return (
            <View key={pId} style={styles.menuItem}>
              <Menu
                style={styles.menu}
                visible={parentSelected === pId}
                onDismiss={() => setParentSelected("")}
                anchor={
                  <Title style={styles.menuTitle} onPress={() => setParentSelected(pId)}>
                    {categoriesMap[pId].name}
                  </Title>
                }
              >
                {categoriesMap[pId].subCategories.map((subCategory) => (
                  <Menu.Item
                    key={subCategory.id}
                    onPress={() => handleCategoryOnSelect(subCategory.id)}
                    title={subCategory.name}
                  />
                ))}
              </Menu>
            </View>
          );
        })}
      </View>
      <View style={styles.getHelpContainer}>
        <Menu
          style={styles.menu}
          visible={parentSelected === "get-help"}
          onDismiss={() => setParentSelected("")}
          anchor={
            <Title
              style={styles.getHelpText}
              onPress={() => setParentSelected("get-help")}
            >
              Get Help Now
            </Title>
          }
        >
          <Menu.Item
            onPress={handleTalkToOurAssistant}
            title="Talk to our chat assistant"
          />
          <Menu.Item onPress={() => {}} title="Lifeline" />
        </Menu>
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
    flexGrow: 1,
  },
  menuTitle: {
    marginRight: 20,
  },
  menu: {
    marginTop: 50,
  },
  titleContainer: {
    padding: 10,
    borderRightWidth: 2,
    borderRightColor: "black",
  },
  menuItem: {
    padding: 10,
    cursor: "pointer",
  },
  getHelpContainer: {
    padding: 10,
    backgroundColor: theme.colors.primary,
  },
  getHelpText: {
    color: "white",
  },
});
