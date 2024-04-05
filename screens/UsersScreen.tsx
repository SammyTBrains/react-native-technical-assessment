import { Text } from "react-native";
import axios from "axios";
import { useEffect } from "react";

const UsersScreen = () => {
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        console.log("Response:", response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    getData();
  }, []);

  return <Text>Users Screen</Text>;
};

export default UsersScreen;
