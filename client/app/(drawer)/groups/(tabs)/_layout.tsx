import { Tabs } from "expo-router";
import { Feather } from "@expo/vector-icons";
import { COLORS } from "../../../../constants";

import { Image } from "react-native";
export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: true }}>
      <Tabs.Screen
        name="grouplist"
        options={{
          headerShown: false,
          tabBarLabel: "List",
          title: "Group",
          tabBarIcon: () => (
            <Image source={require("../../../../assets/group.png")} />
          ),
        }}
      />
      <Tabs.Screen
        name="newgroup"
        options={{
          headerShown: false,
          tabBarLabel: "New Group",
          title: "Group",
          tabBarIcon: () => (
            <Image source={require("../../../../assets/icons/add.png")} />
          ),
        }}
      />
    </Tabs>
  );
}
