import { useEffect, useState } from "react";
import { FlatList, Text } from "react-native";
import axios from "axios";
import UserComponent from "../components/app/UserComponent";
import { UserDataType } from "../type-utilities/type";

const UsersScreen = () => {
  const [data, setData] = useState([]);

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

  const renderUserData = (data: UserDataType) => (
    <UserComponent data={data.name} />
  );

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={renderUserData}
    />
  );
};

export default UsersScreen;
