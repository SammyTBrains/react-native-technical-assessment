import { StyleSheet, Text, View } from "react-native";
import { UserDataType } from "../../type-utilities/type";
import { Colors } from "../../constants/colors";

type Props = {
  data: UserDataType;
  status: string;
};

const UserComponent = (props: Props) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.topText}>{props.data.name}</Text>
        <Text style={styles.secondText}>{props.data.email}</Text>
      </View>
      <View
        style={[
          styles.statusContainer,
          {
            backgroundColor: props.status === "Active" ? Colors.greenLight : "",
          },
        ]}
      >
        <Text
          style={{ color: props.status === "Active" ? Colors.appGreen : "" }}
        >
          {props.status}
        </Text>
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
    backgroundColor: Colors.greyLight,
    marginBottom: 1,
  },
  topText: {
    fontSize: 13,
    marginBottom: 3,
  },
  secondText: {
    fontSize: 11,
    color: Colors.greyDark,
  },
  statusContainer: {
    borderRadius: 17,
    borderWidth: 2,
    borderColor: "white",
    padding: 8,
  },
});
