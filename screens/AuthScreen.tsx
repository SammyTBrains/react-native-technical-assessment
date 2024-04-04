import { useState } from "react";
import {
  Image,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; // You may need to install '@expo/vector-icons'
import CustomButtonA from "../components/UI/CustomButtonA";
import { SafeAreaView } from "react-native-safe-area-context";

const AuthScreen = () => {
  const [authState, setAuthState] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView style={styles.screen}>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Image source={require("../assets/images/Residently Logo.png")} />
        <Text>Welcome!</Text>
        <Text>
          Sign up or log in to your account to manage access to your users
          smartly.
        </Text>
      </View>
      <View style={styles.container}>
        {/* Email Field */}
        <View style={styles.inputContainer}>
          <Ionicons name="mail" size={20} color="#aaa" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
          />
        </View>

        {/* Password Field */}
        <View style={styles.inputContainer}>
          <Ionicons
            name="lock-closed"
            size={20}
            color="#aaa"
            style={styles.icon}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <TouchableOpacity onPress={() => alert("Forgot password?")}>
            <Text style={styles.forgotText}>Forgot?</Text>
          </TouchableOpacity>
        </View>

        {/* Login Button */}
        {/* <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity> */}

        <CustomButtonA onPress={() => {}}>
          {authState == "login" ? "Login" : "Sign up"}
        </CustomButtonA>
        <Text>
          <Text>{authState == "login" ? "Sign up" : "Login"}</Text> instead
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    marginVertical: 10,
    paddingHorizontal: 15,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 54,
  },
  forgotText: {
    color: "blue",
  },
  loginButton: {
    backgroundColor: "blue",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginTop: 20,
  },
  loginButtonText: {
    color: "white",
    fontSize: 16,
  },
});
