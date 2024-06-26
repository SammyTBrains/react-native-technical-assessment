import { useState } from "react";
import {
  Image,
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
} from "react-native";
import { useForm, Controller } from "react-hook-form";
import { Ionicons } from "@expo/vector-icons"; // You may need to install '@expo/vector-icons'
import CustomButtonA from "../components/UI/CustomButtonA";
import { SafeAreaView } from "react-native-safe-area-context";

import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootNavParamList } from "../type-utilities/type";
import { Colors } from "../constants/colors";

type FormData = {
  email: string;
  password: string;
};

type UsersScreenScreenNavigationProp = NativeStackNavigationProp<
  RootNavParamList,
  "UsersScreen"
>;

type AuthScreenProps = {
  navigation: UsersScreenScreenNavigationProp;
};

const AuthScreen = (props: AuthScreenProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const onSubmit = (data: FormData) => props.navigation.navigate("UsersScreen");

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
          <Controller
            control={control}
            rules={{
              required: {
                value: true,
                message: "This is required.",
              },
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email address.",
              },
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.input}
                placeholder="Email address"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                autoCapitalize="none"
                keyboardType="email-address"
              />
            )}
            name="email"
          />
        </View>
        {errors.email && (
          <Text style={styles.errorText}>{errors.email.message}</Text>
        )}
        <View style={styles.inputContainer}>
          <Ionicons
            name="lock-closed"
            size={22}
            color="#aaa"
            style={styles.icon}
          />
          <Controller
            control={control}
            rules={{
              required: {
                value: true,
                message: "This is required.",
              },
              minLength: { value: 4, message: "Password too short." },
              maxLength: { value: 12, message: "Password too long." },
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <TextInput
                style={styles.input}
                placeholder="Password"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                secureTextEntry
              />
            )}
            name="password"
          />
          <TouchableOpacity onPress={() => alert("Forgot password?")}>
            <Text style={styles.forgotText}>Forgot?</Text>
          </TouchableOpacity>
        </View>
        {errors.password && (
          <Text style={styles.errorText}>{errors.password.message}</Text>
        )}
      </View>
      <CustomButtonA onPress={handleSubmit(onSubmit)}>Login</CustomButtonA>
      <View style={styles.authStateContainer}>
        <TouchableOpacity>
          <Text style={styles.authStateButtonText}>Sign up</Text>
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
    color: Colors.greyDark,
    fontSize: 16,
    textAlign: "center",
    marginBottom: 5,
  },
  topText: {
    color: Colors.appPurple,
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
    borderColor: Colors.greyLight,
    borderRadius: 16,
    marginVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: Colors.appGrey,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 54,
    backgroundColor: Colors.appGrey,
  },
  forgotText: {
    color: Colors.appOrange,
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
    color: Colors.greyDark,
  },
  authStateButtonText: {
    color: Colors.appOrange,
    fontSize: 14,
  },
  errorText: {
    color: "red",
  },
});
