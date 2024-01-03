import { useContext, useState } from "react";

import styles from "./Register.style";

import {
  KeyboardAvoidingView,
  Text,
  StyleSheet,
  View,
  TextInput,
  Pressable,
  Alert,
} from "react-native";

import { useRouter } from "expo-router";
import useHttp from "../../hooks/use-http";

const Signup = () => {
  const router = useRouter();
  const [error, setError] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [repeatPassword, setRepeatPassword] = useState<string>("");
  const { sendRequest } = useHttp();

  const onSignup = (data: any) => {
    router.push("./login");
  };

  const handleSignup = () => {
    if (repeatPassword !== password) {
      setError("passwords entered don't match ");
    } else {
      if (
        userName.length > 1 &&
        password.length > 1 &&
        phoneNumber.length > 1
      ) {
        sendRequest(
          {
            url: "http://10.194.65.21:3000/api/v1/users/signUp",
            method: "POST",
            body: { userName, password, name, phoneNumber },
            headers: { "Content-Type": "application/json" },
          },
          onSignup
        );
      } else {
        Alert.alert("Empty Fields", "Please fill in all fields. ");
      }
      setName("");
      setPhoneNumber("");
      setPassword("");
      setUserName("");
      setRepeatPassword("");
    }
  };

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.formContainer}>
        <TextInput
          value={name}
          onChangeText={(text) => {
            setError("");
            setName(text);
          }}
          placeholderTextColor={"#AEAEAE"}
          placeholder="Name"
          style={styles.input}
        />

        <TextInput
          value={userName}
          keyboardType="name-phone-pad"
          onChangeText={(text) => {
            setError("");
            setUserName(text);
          }}
          placeholderTextColor={"#AEAEAE"}
          placeholder="Username"
          style={styles.input}
        />
        <TextInput
          value={phoneNumber}
          keyboardType="name-phone-pad"
          onChangeText={(text) => {
            setError("");
            setPhoneNumber(text);
          }}
          placeholderTextColor={"#AEAEAE"}
          placeholder="Phone Number"
          style={styles.input}
        />

        {/* Password */}
        <TextInput
          value={password}
          onChangeText={(text) => {
            setError("");
            setPassword(text);
          }}
          placeholderTextColor={"#AEAEAE"}
          placeholder="Password"
          secureTextEntry
          style={styles.input}
        />

        {/* Repeat password */}
        <TextInput
          secureTextEntry
          value={repeatPassword}
          onChangeText={(text) => {
            setError("");
            setRepeatPassword(text);
          }}
          placeholderTextColor={"#AEAEAE"}
          placeholder="Repeat Password"
          style={styles.input}
        />

        {error ? <Text style={styles.errorText}>{error}</Text> : null}

        <Pressable
          onPress={handleSignup}
          style={[styles.btn, { marginTop: error ? 10 : 20 }]}
          android_ripple={{ color: "rgba(0, 0, 0, 0.1)" }}
        >
          <Text style={styles.btnText}>Sign Up</Text>
        </Pressable>

        <Pressable
          onPress={() => router.push("/login")}
          style={styles.loginContainer}
        >
          <Text style={styles.haveAccountLabel}>
            Already have an account?{"  "}
            <Text style={styles.loginLabel}>Login</Text>
          </Text>
        </Pressable>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Signup;
