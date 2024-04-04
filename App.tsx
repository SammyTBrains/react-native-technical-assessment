import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthScreen from "./screens/AuthScreen";
import UsersScreen from "./screens/UsersScreen";
import { Colors } from "./constants/colors";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark" />
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{ contentStyle: { backgroundColor: "#FFFFFF" } }}
          >
            <Stack.Screen
              name="LoginScreen"
              component={AuthScreen}
              options={{
                title: "Authentication",
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="UsersScreen"
              component={UsersScreen}
              options={{ title: "Users" }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </>
  );
}
