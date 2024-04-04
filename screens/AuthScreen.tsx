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
      <View style={styles.pageTopSectionContainer}>
        <Image
          source={require("../assets/images/Residently Logo.png")}
          style={styles.logoImage}
        />
        <Text style={styles.topText}>Welcome!</Text>
        <Text style={styles.infoText}>
          Sign up or log in to your account to
        </Text>
        <Text style={styles.infoText}>
          manage access to your users smartly.
        </Text>
      </View>
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Ionicons name="mail" size={22} color="#aaa" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Email address"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
          />
        </View>
        <View style={styles.inputContainer}>
          <Ionicons
            name="lock-closed"
            size={22}
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
      </View>

      <CustomButtonA onPress={() => {}}>
        {authState == "login" ? "Login" : "Sign up"}
      </CustomButtonA>
      <View style={styles.authStateContainer}>
        <TouchableOpacity>
          <Text style={styles.authStateButtonText}>
            {authState == "login" ? "Sign up" : "Login"}
          </Text>
        </TouchableOpacity>
        <Text style={styles.authStateText}> instead</Text>
      </View>
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
  pageTopSectionContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 60,
  },
  logoImage: { marginBottom: 42 },
  infoText: {
    color: "#6E717C",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 5,
  },
  topText: {
    color: "#322B8C",
    fontWeight: "bold",
    fontSize: 32,
    marginBottom: 14,
  },
  formContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    marginBottom: 15,
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

  authStateContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  authStateText: {
    fontSize: 14,
  },
  authStateButtonText: {
    color: "#FF8600",
    fontSize: 14,
  },
});
