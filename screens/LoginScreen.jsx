import React, { useState, useContext } from "react";
import { View, StyleSheet, Image } from "react-native";
import { TextInput, Button, Title, Text } from "react-native-paper";
import { isMobileScreen } from "../core/screen";
import { UserContext } from "../contexts/UserContext";
import { NotificationContext } from "../contexts/NotificationContext";
import { useNavigation } from "@react-navigation/native";

export const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const { loginUser } = useContext(UserContext);
  const { setNotification } = useContext(NotificationContext);

  const navigation = useNavigation();

  let styles = largeStyles;

  if (isMobileScreen()) {
    styles = { ...styles, ...mobileStyles };
  }

  const handleLoginPress = async () => {
    setIsLoggingIn(true);

    try {
      await loginUser(email, password);
      navigation.navigate("Home");
      setNotification("Successfully logged in");
    } catch (e) {
      setNotification("Failed to log in, check your credentials and try again");
    } finally {
      setIsLoggingIn(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={require("../assets/myWellbeing.PNG")}
          style={styles.logo}
          resizeMode="contain"
        />
        <View style={{ display: "flex", flexDirection: "column" }}>
          <Title style={styles.title} onPress={() => {}}>
            myWellbeing
          </Title>
          <Text>@UNSW Sydney</Text>
        </View>
      </View>

      <Title style={styles.loginText}>Experts Login</Title>
      <View style={styles.formContainer}>
        <TextInput
          label="Email"
          mode="outlined"
          value={email}
          style={styles.input}
          onChangeText={(t) => setEmail(t)}
        />

        <TextInput
          label="Password"
          mode="outlined"
          value={password}
          secureTextEntry={true}
          style={styles.input}
          onChangeText={(t) => setPassword(t)}
        />

        <Button
          mode="contained"
          onPress={handleLoginPress}
          disabled={isLoggingIn}
          loading={isLoggingIn}
        >
          Login
        </Button>
      </View>
    </View>
  );
};

const mobileStyles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    backgroundColor: "white",
  },
  formContainer: {
    width: "90%",
  },
});

const largeStyles = StyleSheet.create({
  logoContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  logo: {
    width: 50,
    height: 50,
    marginRight: 20,
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    backgroundColor: "white",
  },
  loginText: {
    marginBottom: 20,
  },
  input: {
    marginBottom: 20,
  },
  formContainer: {
    width: "50%",
  },
});
