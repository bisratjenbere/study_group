import { cloneElement, useContext, useState } from "react";
import { authContext } from "../../context/authContext";

import { useNavigation } from "@react-navigation/native";

import {
  Text,
  StyleSheet,
  View,
  TextInput,
  Pressable,
  Image,
  ActivityIndicator,
  ToastAndroid,
} from "react-native";
import styles from "./Login.style";
import { useRouter } from "expo-router";
import { COLORS } from "../../constants";
import useHttp from "../../hooks/use-http";

const Login = () => {
  const navigation = useNavigation();
  const router = useRouter();
  const { setUser, setIsLoggedIn } = useContext(authContext);
  const { isLoading, sendRequest, error } = useHttp();
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const handleUser = (response: any) => {
    const result = response.data;

    const { userName, phoneNumber, password, name, _id } = result;
    setUser({ userName, phoneNumber, name, id: _id, password });
    setIsLoggedIn(true);

    router.push("");
    setUserName("");
    setPassword("");

    ToastAndroid.show(
      "You're officially in. Now go make things happen!",
      ToastAndroid.SHORT
    );
  };

  const handleLogin = () => {
    if (userName.length >= 1 && password.length >= 1) {
      sendRequest(
        {
          url: "http://10.194.65.21:3000/api/v1/users/login",
          method: "POST",
          body: { userName, password },
          headers: { "Content-Type": "application/json" },
        },
        handleUser
      );
    } else {
      ToastAndroid.show(
        "Username or Password can't be empty.",
        ToastAndroid.LONG
      );
    }
  };

  return (
    <View style={styles.container}>
      <Image
        style={{
          width: 100,
          height: 100,
          alignSelf: "center",
          marginBottom: 20,
          backgroundColor: COLORS.tertiary,
          marginTop: 50,
        }}
        resizeMode="cover"
        source={require("../../assets/user.png")}
      />
      <View style={styles.formContainer}>
        <TextInput
          keyboardType="name-phone-pad"
          value={userName}
          onChangeText={(text) => setUserName(text)}
          placeholderTextColor={COLORS.secondary}
          placeholder="UserName"
          style={styles.input}
        />
        <TextInput
          value={password}
          onChangeText={(text) => setPassword(text)}
          placeholderTextColor={COLORS.secondary}
          placeholder="Password"
          style={styles.input}
          secureTextEntry
        />

        {error && (
          <View>
            <Text style={styles.errorText}>
              The username or password entered is incorrect
            </Text>
          </View>
        )}
        <Pressable
          onPress={handleLogin}
          android_ripple={{ color: "rgba(0, 0, 0, 0.1)" }}
          style={[styles.btn, { marginTop: error ? 10 : 40 }]}
        >
          <Text style={styles.btnText}>Login</Text>
        </Pressable>
        <Pressable
          onPress={() => router.push("/signup")}
          style={styles.signUpContainer}
        >
          <Text style={styles.noAccountLabel}>
            Don't have an account?
            <Text style={styles.signUpLabel}>Create an account</Text>
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Login;
