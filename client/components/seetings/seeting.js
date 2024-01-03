import React, { useState } from "react";
import {
  View,
  Switch,
  TouchableOpacity,
  Alert,
  StyleSheet,
  Text,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useRouter } from "expo-router";

const SettingsScreen = () => {
  const router = useRouter();
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  const handleChangePassword = () => {
    router.push("/(drawer)/settings/update");
  };

  const handleLogout = () => {
    setDarkMode(false);
    router.push("/login");
  };

  return (
    <View style={[styles.container, darkMode && styles.darkModeContainer]}>
      <View style={styles.optionContainer}>
        <Text style={[styles.optionText, darkMode && styles.darkModeText]}>
          Dark Mode
        </Text>
        <Switch value={darkMode} onValueChange={handleDarkModeToggle} />
      </View>
      <TouchableOpacity
        style={[styles.optionContainer, darkMode && styles.darkModeOption]}
        onPress={handleChangePassword}
      >
        <Text style={[styles.optionText, darkMode && styles.darkModeText]}>
          Change Password
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.optionContainer, darkMode && styles.darkModeOption]}
        onPress={handleLogout}
      >
        <Text style={[styles.optionText, darkMode && styles.darkModeText]}>
          Logout
        </Text>
        <AntDesign name="logout" size={24} color={darkMode ? "#fff" : "#000"} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  darkModeContainer: {
    backgroundColor: "#000",
  },
  optionContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
    width: "100%",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingBottom: 10,
  },
  optionText: {
    fontSize: 18,
    color: "#000", // Default text color
  },
  darkModeText: {
    color: "#fff", // Dark mode text color
  },
  darkModeOption: {
    backgroundColor: "#000", // Dark mode option background color
  },
});

export default SettingsScreen;
