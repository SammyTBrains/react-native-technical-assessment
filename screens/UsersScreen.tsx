import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import axios from "axios";
import UserComponent from "../components/app/UserComponent";
import { UserDataType } from "../type-utilities/type";
import { Colors } from "../constants/colors";

const UsersScreen = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  let status = false;

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        setData(response.data);
        setLoading(false);
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

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" color={Colors.greyDark} />
      </View>
    );
  }

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
    paddingHorizontal: 30,
  },
});
