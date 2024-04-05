import { Text, View } from "react-native";
import { UserDataType } from "../../type-utilities/type";

type Props = {
  data: UserDataType;
  status: string
};

const UserComponent = (props: Props) => {
  return (
    <View>
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
