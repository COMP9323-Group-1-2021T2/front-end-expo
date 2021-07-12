import React, { useContext, useEffect }  from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import { NewNavbar } from "../components/NewNavbar";
import { CategoriesContext } from "../contexts/CategoriesContext";
import { ContentContainer } from "../components/ContentContainer";

export const InfoScreen = ({ navigation, route }) => {
  const { categoryId } = route.params;
  const { info, setSelectedCategoryId } = useContext(CategoriesContext);

  useEffect(() => {
    if (categoryId !== "") {
      setSelectedCategoryId(categoryId);
    }
  }, [route.params.categoryId]);

  return (
    <View>
      <NewNavbar />
      <ContentContainer>
        <View>
          <Text>{info}</Text>
        </View>
      </ContentContainer>
    </View>
  );
};

const styles = StyleSheet.create({
});
