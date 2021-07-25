import React, { useContext, useState } from "react";
import { View, StyleSheet } from "react-native";
import { Headline, Menu, Button, Title, IconButton } from "react-native-paper";
import { theme } from "../core/theme";
import { CategoriesContext } from "../contexts/CategoriesContext";
import { NotificationContext } from "../contexts/NotificationContext";
import { UserContext } from "../contexts/UserContext";
import { useNavigation } from "@react-navigation/native";
import { isMobileScreen } from "../core/screen";
import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("screen").width;
const windowWidth = Dimensions.get("window").width;

export const NewNavbar = () => {
  const navigation = useNavigation();
  const { categoriesMap } = useContext(CategoriesContext);
  const { isLoggedIn, logoutUser } = useContext(UserContext);
  const { setNotification } = useContext(NotificationContext);
  const parentIds = Object.keys(categoriesMap);
  const [parentSelected, setParentSelected] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleCategoryOnSelect = (categoryId) => {
    setParentSelected("");
    navigation.navigate("Info", {
      categoryId,
    });
  };
  const handleContacts = () => {
    setParentSelected("");
    navigation.navigate("Contacts");
  };
  const handleOnTitlePress = () => {
    setParentSelected("");
    navigation.navigate("");
  };

  const handleLoginPress = () => {
    setParentSelected("");
    navigation.navigate("Login");
  };

  const handleLogoutPress = async () => {
    setParentSelected("");
    try {
      await logoutUser();
      setNotification("Successfully logged out");
    } catch {
      setNotification("Failed to logout");
    }
  };

  const handleQuestionsPress = () => {
    setParentSelected("");
    navigation.navigate("Questions");
  }

  let styles = largeStyles;

  const isMobile = isMobileScreen();
  const emergency = <Text style={{ color: "#E78587" }}> 000 </Text>;

  if (isMobile) {
    styles = { ...styles, ...mobileStyles };
  }

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <IconButton
          icon="menu"
          color="black"
          size={21}
          style={[isMobile ? {} : { display: "none" }]}
          onPress={() => setIsOpen(!isOpen)}
        />
        <Title style={styles.title} onPress={handleOnTitlePress}>
          myWellbeing
        </Title>

        <View style={[isMobile ? styles.loginContainer : { display: "none" }]}>
          <Button mode="text" onPress={handleQuestionsPress}>
            Questions
          </Button>
          {isLoggedIn ? (
            <Button mode="text" onPress={handleLogoutPress}>
              Logout
            </Button>
          ) : (
            <Button mode="text" onPress={handleLoginPress}>
              Login
            </Button>
          )}
        </View>
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
      <View style={[isMobile ? { display: "none" } : styles.loginContainer]}>
        <Button mode="text" onPress={handleQuestionsPress}>
          Questions
        </Button>
        {isLoggedIn ? (
          <Button mode="text" onPress={handleLogoutPress}>
            Logout
          </Button>
        ) : (
          <Button mode="text" onPress={handleLoginPress}>
            Login
          </Button>
        )}
      </View>
      <View style={styles.getHelpContainer}>
        <Menu
          style={[
            styles.menu,
            screenWidth,
            windowWidth < 400 ? styles.mobileMenu : styles.menu,
          ]}
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
            titleStyle={{
              color: "#d64204",
            }}
            style={{ marginTop: "10%" }}
            onPress={() => {
              window.open("https://www.triplezero.gov.au/", "_blank");
            }}
            title={
              "If you or someone close to you is\nin distress or immediate danger," +
              `\n` +
              "dial" +
              " 000 " +
              "as soon as possible."
            }
          ></Menu.Item>
          <Menu.Item
            style={{ marginTop: "10%" }}
            onPress={handleContacts}
            title="Contacts"
            icon="phone"
          />
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
  loginContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
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
  mobileMenu: {
    marginLeft: "25%",
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
  loginContainer: {
    flexDirection: "row",
  },
  menus: {
    flexDirection: "column",
    flexGrow: 1,
  },
  menusHiddenMobile: {
    display: "none",
  },
  title: {
    fontSize: 30,
    flexGrow: 1,
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
  getHelpContainer: {
    padding: 10,
    backgroundColor: theme.colors.primary,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
