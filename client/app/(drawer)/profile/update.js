import { Text, StyleSheet, View, Settings, ToastAndroid } from "react-native";
import { Drawer } from "expo-router/drawer";
import { DrawerToggleButton } from "@react-navigation/drawer";
import UpdateProfile from "../../../components/update/Seetings";
import { COLORS } from "../../../constants";
import { ScrollView } from "react-native-gesture-handler";
import useHttp from "../../../hooks/use-http";
import { useContext, useEffect } from "react";
import { authContext } from "../../../context/authContext";
import { useRouter, useNavigation } from "expo-router";

export default function Page() {
  const navigation = useNavigation();
  const { userData, setUser } = useContext(authContext);
  const { sendRequest, error, isLoading } = useHttp();
  const saveHandler = (updatedData) => {
    let updatedUser = {};
    if (userData.userName !== updatedData.userName) {
      updatedUser.userName = updatedData.userName;
    }

    if (userData.name !== updatedData.name) {
      updatedUser.name = updatedData.name;
    }
    if (userData.photo !== updatedData.photo) {
      updatedUser.photo = updatedData.photo;
    }
    if (userData.phoneNumber !== updatedData.phoneNumber) {
      updatedUser.phoneNumber = updatedData.phoneNumber;
    }

    if (
      updatedUser.name ||
      updatedUser.photo ||
      updatedUser.phoneNumber ||
      updatedUser.userName
    ) {
      sendRequest(
        {
          url: `http://10.194.65.21:3000/api/v1/users/${userData.id}`,
          method: "PATCH",
          body: { ...updatedUser },
          headers: { "Content-Type": "application/json" },
        },
        handleUpdateUser
      );
    } else {
      navigation.goBack();
    }
  };
  const handleUpdateUser = (data) => {
    const { userName, phoneNumber, password, name, _id, photo } = data.data;

    setUser({ password, phoneNumber, name, id: _id, photo, userName });
    navigation.goBack();
    console.log(password, phoneNumber, name, photo);

    ToastAndroid.show("Updated", ToastAndroid.LONG);
  };

  return (
    <View style={styles.container}>
      <Drawer.Screen
        options={{
          title: "Update",
          headerTitleStyle: { color: "#fff" },
          headerStyle: { backgroundColor: "#1640D6", padding: 10 },
          headerShown: true,
          headerLeft: () => <DrawerToggleButton />,
        }}
      />
      <UpdateProfile user={userData} onSave={saveHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
});
