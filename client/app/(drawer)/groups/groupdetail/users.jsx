import { Text, StyleSheet, View } from "react-native";
import { Drawer } from "expo-router/drawer";
import { DrawerToggleButton } from "@react-navigation/drawer";

import UserList from "../../../../components/Chat/User";
import { useGlobalSearchParams } from "expo-router/src/hooks";

export default function Page() {
  const params = useGlobalSearchParams();

  return <UserList />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 24,
  },
});
