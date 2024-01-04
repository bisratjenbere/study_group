import React, { useContext, useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Alert,
  Text,
  ToastAndroid,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { authContext } from "../../context/authContext";
import useHttp from "../../hooks/use-http";
import { useRouter } from "expo-router/src/hooks";
const ChangePasswordScreen = () => {
  const router = useRouter();

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { sendRequest } = useHttp();

  const { userData } = useContext(authContext);

  const handlePasswordChange = (data) => {
    ToastAndroid.show("Password changed successfully!", ToastAndroid.SHORT);
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
    router.push("/settings");
  };
  const handleChangePassword = () => {
    if (!currentPassword || !newPassword || !confirmPassword) {
      ToastAndroid.show("Please fill in all fields.", ToastAndroid.LONG);
      return;
    }

    if (newPassword !== confirmPassword) {
      ToastAndroid.show(
        "New password and confirm password do not match.",
        ToastAndroid.LONG
      );
      return;
    }

    sendRequest(
      {
        url: `http://10.194.65.21:3000/api/v1/users/${userData.id}`,
        method: "PATCH",
        body: { password: newPassword },
        headers: { "Content-Type": "application/json" },
      },
      handlePasswordChange
    );
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Current Password"
        secureTextEntry
        value={currentPassword}
        onChangeText={(text) => setCurrentPassword(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="New Password"
        secureTextEntry
        value={newPassword}
        onChangeText={(text) => setNewPassword(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Confirm New Password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={(text) => setConfirmPassword(text)}
      />

      <TouchableOpacity
        style={styles.saveButton}
        onPress={handleChangePassword}
      >
        <Text>Change Password</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  input: {
    width: "100%",
    padding: 10,
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  saveButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 25,
    marginTop: 20,
  },
});

export default ChangePasswordScreen;
