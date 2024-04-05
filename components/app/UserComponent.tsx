import { StyleSheet, Text, View } from "react-native";
import { UserDataType } from "../../type-utilities/type";
import { Colors } from "../../constants/colors";

type Props = {
  data: UserDataType;
  status: string;
};

const UserComponent = (props: Props) => {
  function getInitials(fullName: string) {
    // Split the full name by the space character
    const names = fullName.split(" ");

    // Extract the first and last names
    const firstName = names[0];
    const lastName = names.length > 1 ? names[names.length - 1] : "";

    // Get the first character of each name and convert to uppercase
    const firstInitial = firstName ? firstName[0] : "";
    const lastInitial = lastName ? lastName[0] : "";

    // Concatenate and return the initials
    return `${firstInitial}${lastInitial}`.toUpperCase();
  }

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <View style={styles.initialsContainer}>
          <Text style={styles.initials}>{getInitials(props.data.name)}</Text>
        </View>
        <View>
          <Text style={styles.topText}>{props.data.name}</Text>
          <Text style={styles.secondText}>{props.data.email}</Text>
        </View>
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
  initialsContainer: {
    backgroundColor: "white",
    width: 48,
    height: 48,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 20,
  },
  initials: { fontSize: 16 },
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
