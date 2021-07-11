import React, { useContext, useEffect } from "react";
import { View, Text } from "react-native";
import { NewNavbar } from "../components/NewNavbar";
import { CategoriesContext } from "../contexts/CategoriesContext";
import { ContentContainer } from "../components/ContentContainer";

export const VideosScreen = ({ navigation, route }) => {
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
        <Text>Videos Screen</Text>
      </ContentContainer>
    </View>
  );
}
