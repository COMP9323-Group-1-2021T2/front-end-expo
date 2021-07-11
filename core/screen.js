import { useWindowDimensions } from "react-native";

export const isLargeScreen = () => {
  const windowWidth = useWindowDimensions().width;
  return windowWidth >= 992;
}

export const isMobileScreen = () => {
  return !isLargeScreen();
}
