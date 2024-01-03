import { Text, View, StyleSheet, TouchableOpacity, Button } from "react-native";
import { Link } from "expo-router";
import { Drawer } from "expo-router/drawer";
import { DrawerToggleButton } from "@react-navigation/drawer";
import StudyGroups from "../../../../../components/Group/Joined";
import { COLORS } from "../../../../../constants";

export default function Page() {
  return (
    <>
      <View style={styles.container}>
        <Drawer.Screen
          options={{
            headerShown: true,
            headerTitleStyle: { color: "#fff" },
            headerStyle: { backgroundColor: COLORS.secondary, padding: 10 },
            headerLeft: () => <DrawerToggleButton />,
          }}
        />
        <StudyGroups />
        <View
          style={{
            flexDirection: "row",
            gap: 10,
          }}
        ></View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
