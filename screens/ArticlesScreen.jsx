import React, { useContext, useEffect } from "react";
import { View, Text } from "react-native";
import { NewNavbar } from "../components/NewNavbar";
import { CategoriesContext } from "../contexts/CategoriesContext";
import { ContentContainer } from "../components/ContentContainer";

export const ArticlesScreen = ({ navigation, route }) => {
  const { categoryId } = route.params;
  const { setSelectedCategoryId } = useContext(CategoriesContext);

  useEffect(() => {
    if (categoryId !== "") {
      setSelectedCategoryId(categoryId);
    }
  }, [route.params.categoryId]);

  return (
    <View>
      <NewNavbar />
      <ContentContainer>
        <Text>Articles Screen</Text>
      </ContentContainer>
    </View>
  );
};
