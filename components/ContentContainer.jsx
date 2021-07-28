import React from "react";
import { View, StyleSheet, ScrollView, FlatList, Text } from "react-native";
import { Headline } from "react-native-paper";
import { useRoute, useNavigation } from "@react-navigation/native";
import { theme } from "../core/theme";
import { Video } from "./Video";
import ScrollBox from "react-responsive-scrollbox";

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
    <>
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
        </View>

        <ScrollBox style={{height:'75vh', width:'80vw', margin:'auto'}}> 
          <View style={{marginBottom:'20vh'}}>
              {children} 
          </View>
        </ScrollBox>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    height:'15vh',
    width:'100%',
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
