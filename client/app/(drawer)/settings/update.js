import { Text, StyleSheet, View } from "react-native";
import { Drawer } from "expo-router/drawer";
import { DrawerToggleButton } from "@react-navigation/drawer";
import { COLORS } from "../../../constants";
import ChangePasswordScreen from "../../../components/Profile/UpdatePassword";
import { useRouter, usePathname } from "expo-router";

export default function Page() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Drawer.Screen
        options={{
          title: "password",

          headerTitleStyle: { color: "#fff" },
          headerStyle: { backgroundColor: "#1640D6", padding: 10 },
          headerShown: true,
          headerLeft: () => <DrawerToggleButton />,
        }}
      />
      <ChangePasswordScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});
