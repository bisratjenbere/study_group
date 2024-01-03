import { Text, StyleSheet, View } from "react-native";
import { Drawer } from "expo-router/drawer";
import { DrawerToggleButton } from "@react-navigation/drawer";
import UserDetails from "../../../components/Profile/Profile";
import { ScrollView } from "react-native-gesture-handler";
import { COLORS } from "../../../constants";
import { authContext } from "../../../context/authContext";
import { useContext } from "react";
import { useRouter, usePathname } from "expo-router";

export default function Page() {
  const { userData } = useContext(authContext);

  const router = useRouter();

  const handleEditProfile = () => {
    router.push("/profile/update");
  };
  return (
    <ScrollView style={styles.container}>
      <Drawer.Screen
        options={{
          title: "Profile",

          headerTitleStyle: { color: "#fff" },
          headerStyle: { backgroundColor: "#1640D6", padding: 10 },
          headerShown: true,
          headerLeft: () => <DrawerToggleButton />,
        }}
      />
      <UserDetails onEdit={handleEditProfile} user={userData} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});
