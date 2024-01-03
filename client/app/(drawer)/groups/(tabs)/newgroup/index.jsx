import CreateGroup from "../../../../../components/Group/NewGroup";
import { ScrollView, StyleSheet, View } from "react-native";
import { COLORS } from "../../../../../constants";
import { Drawer } from "expo-router/drawer";
import { DrawerToggleButton } from "@react-navigation/drawer";

export default function Page() {
  return (
    <ScrollView style={styles.container}>
      <Drawer.Screen
        options={{
          headerShown: true,
          headerTitleStyle: { color: "#fff" },
          headerStyle: { backgroundColor: COLORS.secondary, padding: 10 },
          headerLeft: () => <DrawerToggleButton />,
        }}
      />
      <CreateGroup />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 20,
    marginBottom: 20,
  },
});
