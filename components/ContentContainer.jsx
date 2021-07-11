import React from "react";
import { View, StyleSheet } from "react-native";
import { Headline } from "react-native-paper";
import { useRoute, useNavigation } from "@react-navigation/native";
import { theme } from "../core/theme";

export const ContentContainer = ({ children }) => {
  const route = useRoute();
  const navigation = useNavigation();

  const { categoryId } = route.params;
  const routeName = route.name;

  const handleOnInfoPress = () => {
    if (routeName === "Info") {
      return;
    }

    navigation.navigate("Info", { categoryId })
  };

  const handleOnArticlesPress = () => {
    if (routeName === "Articles") {
      return;
    }

    navigation.navigate("Articles", { categoryId })
  };

  const handleOnVideosPress = () => {
    if (routeName === "Videos") {
      return;
    }

    navigation.navigate("Videos", { categoryId })
  };

  return (
    <View style={styles.container}>
      <View style={styles.tabsContainer}>
        <View style={styles.tabContainer}>
          <Headline style={routeName === "Info" && styles.selectedTab} onPress={handleOnInfoPress}>Info</Headline>
        </View>

        <View style={styles.tabContainer}>
          <Headline style={routeName === "Articles" && styles.selectedTab} onPress={handleOnArticlesPress}>Articles</Headline>
        </View>

        <View style={styles.tabContainer}>
          <Headline style={routeName === "Videos" && styles.selectedTab} onPress={handleOnVideosPress}>Videos</Headline>
        </View>
      </View>
      <View style={styles.contentContainer}>{children}</View>
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
  tabsContainer: {
    display: "flex",
    flexDirection: "row",
    marginBottom: 50,
  },

  tabContainer: {
    padding: 20,
  },

  selectedTab: {
    color: theme.colors.primary,
  },

  contentContainer: {
    width: "90%",
  },
});
