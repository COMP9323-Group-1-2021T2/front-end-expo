import React, { useContext, useEffect }  from "react";
import { View, Text } from "react-native";
import { NewNavbar } from "../components/NewNavbar";
import { CategoriesContext } from "../contexts/CategoriesContext";

export const InfoScreen = ({ navigation, route }) => {
  const { categoryId } = route.params;
  const { setSelectedCategoryId } = useContext(CategoriesContext);

  console.log(categoryId);

  useEffect(() => {
    if (categoryId !== "") {
      setSelectedCategoryId(categoryId);
    }
  }, [route.params.categoryId]);

  return (
    <View>
      <NewNavbar navigation={navigation} />
      <Text>Info Screen</Text>
    </View>
  );
};
