import { StyleSheet, Text, View } from "react-native";
import { UserDataType } from "../../type-utilities/type";

type Props = {
  data: UserDataType;
  status: string;
};

const UserComponent = (props: Props) => {
  return (
    <View style={styles.container}>
      <View>
        <Text>{props.data.username}</Text>
        <Text>{props.data.name}</Text>
      </View>
      <View>
        <Text>{props.status}</Text>
      </View>
    </View>
  );
};

export default UserComponent;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderRadius: 13,
    padding: 15,
    height: 84,
    backgroundColor: "#EFF2F7",
    marginBottom: 1,
  },
});
