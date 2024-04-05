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
        <Text style={styles.topText}>{props.data.username}</Text>
        <Text style={styles.secondText}>{props.data.name}</Text>
      </View>
      <View style={styles.statusContainer}>
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
  topText: {
    fontSize: 13,
    marginBottom: 3,
  },
  secondText: {
    fontSize: 11,
    color: "#6E717C",
  },
  statusContainer: {
    borderRadius: 17,
    borderWidth: 2,
    borderColor: "white",
    padding: 8,
  },
});
