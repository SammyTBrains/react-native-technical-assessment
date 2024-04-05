import { useEffect, useState } from "react";
import { FlatList, Text } from "react-native";
import axios from "axios";
import UserComponent from "../components/app/UserComponent";
import { DataType } from "../type-utilities/type";

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

  return (
    <>
      {data.map((data: DataType) => (
        <UserComponent key={data.id} data={data.name} />
      ))}
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={renderExpenseItem}
        onRefresh={props.onRefresh}
        refreshing={props.refreshing}
      />
    </>
  );
};

export default UsersScreen;
