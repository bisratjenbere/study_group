import { Drawer } from "expo-router/drawer";
import { DrawerToggleButton } from "@react-navigation/drawer";
import { COLORS } from "../../constants";
import { StyleSheet, Image } from "react-native";
export default function DrawerLayout() {
  return (
    <Drawer
      screenOptions={{
        backgroundColor: "#4477CE",
        headerTitle: "sidebar",
        headerShown: false,
        swipeEdgeWidth: 0,
        drawerItemStyle: styles.drawerContainer,
      }}
    >
      <Drawer.Screen
        name="home"
        options={{
          drawerLabel: "Home",
          title: "Home",
          drawerLabelStyle: styles.drawerLabel,
          headerLeft: () => <DrawerToggleButton />,
          drawerIcon: () => (
            <Image
              source={require("../../assets/home.png")}
              style={{ width: 24, height: 24 }}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="groups"
        options={{
          drawerLabel: "my-group",
          title: "my-Group",
          drawerLabelStyle: styles.drawerLabel,
          headerLeft: () => <DrawerToggleButton />,
          drawerIcon: () => (
            <Image
              source={require("../../assets/group.png")}
              style={{ width: 24, height: 24 }}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="profile"
        options={{
          drawerLabel: "Profile",
          drawerLabelStyle: styles.drawerLabel,
          title: "Profile",
          headerLeft: () => <DrawerToggleButton />,
          drawerIcon: () => (
            <Image
              source={require("../../assets/profile.png")}
              style={{ width: 24, height: 24 }}
            />
          ),
        }}
      />

      <Drawer.Screen
        name="settings"
        options={{
          drawerLabel: "Settings",
          title: "Settings",
          headerLeft: () => <DrawerToggleButton />,
          drawerIcon: () => (
            <Image
              source={require("../../assets/seeting.png")}
              style={{ width: 24, height: 24 }}
            />
          ),
        }}
      />
    </Drawer>
  );
}

const styles = StyleSheet.create({
  drawerContainer: {
    backgroundColor: COLORS.lightWhite,
    alignContent: "center",
    justifyContent: "center",
  },

  drawerItem: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 5,
  },

  drawerLabel: {
    fontSize: 16,
    fontWeight: "bold",
  },
});
