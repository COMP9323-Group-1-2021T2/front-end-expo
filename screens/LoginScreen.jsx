import React, { useState, useContext } from "react";
import { View, StyleSheet } from "react-native";
import { TextInput, Button, Title } from "react-native-paper";
import { isMobileScreen } from "../core/screen";
import { UserContext } from "../contexts/UserContext";
import { useNavigation } from "@react-navigation/native";

export const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const { loginUser } = useContext(UserContext);
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
    } catch (e) {
      alert(e.message);
    } finally {
      setIsLoggingIn(false);
    }
  };

  return (
    <View style={styles.container}>
      <Title style={styles.loginText}>Login to myWellbeing</Title>
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
  },
  formContainer: {
    width: "90%",
  },
});

const largeStyles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
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
