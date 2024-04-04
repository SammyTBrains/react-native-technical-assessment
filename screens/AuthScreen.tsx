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
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 60,
        }}
      >
        <Image
          source={require("../assets/images/Residently Logo.png")}
          style={{ marginBottom: 42 }}
        />
        <Text
          style={{
            color: "#322B8C",
            fontWeight: "bold",
            fontSize: 32,
            marginBottom: 14,
          }}
        >
          Welcome!
        </Text>
        <Text
          style={{
            color: "#6E717C",
            fontSize: 16,
            textAlign: "center",
            marginBottom: 5,
          }}
        >
          Sign up or log in to your account to
        </Text>
        <Text
          style={{
            color: "#6E717C",
            fontSize: 16,
            textAlign: "center",
            marginBottom: 5,
          }}
        >
          manage access to your users smartly.
        </Text>
      </View>
      <View style={styles.formContainer}>
        {/* Email Field */}
        <View style={styles.inputContainer}>
          <Ionicons name="mail" size={20} color="#aaa" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Email address"
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
      </View>
      <CustomButtonA onPress={() => {}}>
        {authState == "login" ? "Login" : "Sign up"}
      </CustomButtonA>
      <Text style={{ fontSize: 14 }}>
        <Text style={{ color: "#FF8600", fontSize: 14 }}>
          {authState == "login" ? "Sign up" : "Login"}
        </Text>{" "}
        instead
      </Text>
    </SafeAreaView>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    padding: 20,
  },
  formContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    marginVertical: 15,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 16,
    marginVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: "#F9FAFC",
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 54,
    backgroundColor: "#F9FAFC",
  },
  forgotText: {
    color: "#FF8600",
    fontSize: 14,
  },
  loginButton: {
    backgroundColor: "#FF8600",
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
