import { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import axios from "axios";
import UserComponent from "../components/app/UserComponent";
import { UserDataType } from "../type-utilities/type";

const UsersScreen = () => {
  const [data, setData] = useState([]);

  let status = false;

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setData(response.data);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    getData();
  }, []);

  const renderUserData = (itemData: { item: UserDataType }) => {
    status = !status;
    return (
      <UserComponent
        data={itemData.item}
        status={status === false ? "Pending" : "Active"}
      />
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList
        data={data}
        keyExtractor={(item: UserDataType) => item.id}
        renderItem={renderUserData}
      />
    </View>
  );
};

export default UsersScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 40,
  },
});
