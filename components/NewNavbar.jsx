import React, { useContext, useState } from "react";
import { View, StyleSheet, Image, Text } from "react-native";
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

//This component is for the navigation bar. It's layout is dependent on the device being used i.e. mobile
//or desktop

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
    console.log(categoryId)
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
    navigation.navigate("Home");
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
  };

  const handleExpertsPress = () => {
    setParentSelected("");
    navigation.navigate("Experts");
  };

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

        <Image
          source={require("../assets/myWellbeing.PNG")}
          style={{ width: 50 }}
          resizeMode="contain"
        />
        <View style={{display:'flex', flexDirection:'column'}}>
          <Title style={styles.title} onPress={handleOnTitlePress}>
            myWellbeing  
          </Title>
          <Text style={[isMobile ? { marginBottom:'5%', textAlign: 'end' } : {textAlign:'end'}]}> @UNSW Sydney </Text>
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
        <View style={styles.buttonsInMenu}>
          <Button mode="text" onPress={handleExpertsPress}>
            Experts
          </Button>
          <Button mode="text" onPress={handleQuestionsPress}>
            Questions
          </Button>
          {isLoggedIn ? (
            <Button mode="text" onPress={handleLogoutPress}>
              Logout
            </Button>
          ) : (
            <Button
              mode="text"
              onPress={handleLoginPress}
            >
              Login
            </Button>
          )}
        </View>
      </View>
      <View style={[isMobile ? { display: "none" } : styles.loginContainer]}>
        <Button mode="text" onPress={handleExpertsPress}>
          Experts
        </Button>
        <Button mode="text" onPress={handleQuestionsPress}>
          Questions
        </Button>
        {isLoggedIn ? (
          <Button mode="text" onPress={handleLogoutPress}>
            Logout
          </Button>
        ) : (
          <Button
            mode="text"
            onPress={handleLoginPress}
          >
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
              style={[isMobile ? { color: "white" } : styles.getHelpText]}
              onPress={() => setParentSelected("get-help")}
            >
              GET HELP NOW
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
          >
          </Menu.Item>
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
    alignItems: "center",
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
    fontSize: "2em",
  },
  menuTitle: {
    marginRight: 20,
    fontSize: "1.3vw",
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
    display: "flex",
    flexDirection: "row",
    width: "30%",
    maxWidth: "270px",
  },
  menuItem: {
    padding: 10,
    cursor: "pointer",
  },
  getHelpContainer: {
    paddingHorizontal: 20,
    backgroundColor: theme.colors.primary,
    height: "100%",
    display: "flex",
    justifyContent: "center",
  },
  getHelpText: {
    color: "white",
    fontSize: "1.1vw",
  },
  buttonsInMenu: {
    display: "none",
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
  buttonsInMenu: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    paddingLeft: 25,
  },
});
