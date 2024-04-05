import { Text } from "react-native";

type Props = {
  data: string;
};

const UserComponent = (props: Props) => {
  return <Text>{props.data}</Text>;
};

export default UserComponent;
