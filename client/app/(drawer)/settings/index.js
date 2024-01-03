import { StyleSheet, View } from "react-native";
import { Drawer } from "expo-router/drawer";
import { DrawerToggleButton } from "@react-navigation/drawer";
import UpdateProfile from "../../../components/update/Seetings";
import { ScrollView } from "react-native-gesture-handler";
import SettingsScreen from "../../../components/seetings/seeting";
import { COLORS } from "../../../constants";

export default function Page() {
  return (
    <View style={styles.container}>
      <Drawer.Screen
        options={{
          title: "Settings",
          headerTitleStyle: { color: "#fff" },
          headerStyle: { backgroundColor: COLORS.secondary, padding: 10 },
          headerShown: true,
          headerLeft: () => <DrawerToggleButton />,
        }}
      />
      <SettingsScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
