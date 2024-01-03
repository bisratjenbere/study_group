import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import useHttp from "../../hooks/use-http";

const UserList = ({ setIsAddMember, members, addMemberTostate }) => {
  const { sendRequest } = useHttp();
  const [unJoined, setUnJoined] = useState([]);

  useEffect(() => {
    sendRequest(
      {
        url: `http://10.194.65.19:3000/api/v1/users`,
      },
      handleUserLoad
    );
  }, []);

  const handleUserLoad = (response) => {
    const userList = response.data;
    setUnJoined(
      userList.filter(
        (user) => !members.some((member) => member._id === user._id)
      )
    );
  };

  const renderUserIcon = (photoUrl) => {
    if (photoUrl) {
      return <Image source={{ uri: photoUrl }} style={styles.userImage} />;
    } else {
      return <Ionicons name="person-circle-outline" size={50} color="black" />;
    }
  };

  const handleButtonPress = (item) => {
    addMemberTostate(item);
    setIsAddMember(false);
  };

  const renderItem = ({ item }) => {
    return (
      <View style={styles.userItem}>
        {renderUserIcon(item.photo)}
        <Text style={styles.userName}>{item.name}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleButtonPress(item)}
        >
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <FlatList
      data={unJoined}
      keyExtractor={(item) => item._id}
      renderItem={renderItem}
      style={styles.container}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  userItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  userName: {
    flex: 1,
    fontSize: 16,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#007AFF",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default UserList;
