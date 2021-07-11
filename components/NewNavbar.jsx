import React, { useContext, useState } from "react";
import { View, StyleSheet } from "react-native";
import { Headline, Menu, Divider, Title, IconButton } from "react-native-paper";
import { theme } from "../core/theme";
import { CategoriesContext } from "../contexts/CategoriesContext";
import { useNavigation } from "@react-navigation/native";
import { isMobileScreen } from "../core/screen";

export const NewNavbar = () => {
  const navigation = useNavigation();
  const { categoriesMap } = useContext(CategoriesContext);
  const parentIds = Object.keys(categoriesMap);
  const [parentSelected, setParentSelected] = useState("");
  const [isOpen, setIsOpen] = useState(false);

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

  let styles = largeStyles;

  if (isMobileScreen()) {
    styles = { ...styles, ...mobileStyles };
  }

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <IconButton
          icon="menu"
          color="black"
          size={21}
          onPress={() => setIsOpen(!isOpen)}
        />
        <Title style={styles.title} onPress={handleOnTitlePress}>
          myWellbeing
        </Title>
      </View>
      <View style={[styles.menus, isOpen ? {} : styles.menusHiddenMobile]}>
        {parentIds.map((pId) => {
          return (
            <View key={pId} style={styles.menuItem}>
              <Menu
                style={styles.menu}
                visible={parentSelected === pId}
                onDismiss={() => setParentSelected("")}
                anchor={
                  <Headline
                    style={styles.menuTitle}
                    onPress={() => setParentSelected(pId)}
                  >
                    {categoriesMap[pId].name}
                  </Headline>
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
            icon="chat"
          />
          <Menu.Item icon="phone" onPress={() => {}} title="Lifeline" />
        </Menu>
      </View>
    </View>
  );
};

const largeStyles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
  },
  title: {
    fontSize: 30,
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
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRightWidth: 2,
    borderRightColor: "black",
    marginRight: 20,
    display: "flex",
    flexDirection: "row",
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

const mobileStyles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "white",
  },
  menus: {
    flexDirection: "column",
    flexGrow: 1,
  },
  menusHiddenMobile: {
    display: "none",
  },
  titleContainer: {
    paddingTop: 10,
    display: "flex",
    flexDirection: "row",
  },
  menuItem: {
    cursor: "pointer",
    paddingLeft: 40,
  },
  menuTitle: {
    marginRight: 0,
    fontSize: 20,
  },
});
