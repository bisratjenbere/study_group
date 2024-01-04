import { useNavigation } from "@react-navigation/native";
import { useContext, useEffect } from "react";
import { authContext } from "../context/authContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router/src/hooks";
export default function Page() {
  const navigation = useNavigation();
  const { setUser, userData } = useContext(authContext);
  const router = useRouter();

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("userData");
      const currentUser = JSON.parse(value);

      if (!currentUser) {
        navigation.navigate("landing");
      } else {
        const { userName, phoneNumber, password, name, id, photo } =
          currentUser;
        setUser({ userName, phoneNumber, password, name, photo, id });
        router.push("/(drawer)/home");
      }
    } catch (e) {
      console.error(e);
    }
  };

  return null;
}
