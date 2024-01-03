import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
const GroupList = ({ isJoined, name, subject, photo, onJoin }) => {
  return (
    <View style={styles.groupContainer}>
      {photo ? (
        <Image source={{ uri: photo }} style={styles.groupImage} />
      ) : (
        <Image
          source={require("../../assets/image/study.jpg")}
          style={styles.groupImage}
        />
      )}

      <View style={styles.groupInfo}>
        <Text style={styles.groupName}>{name}</Text>
        <Text>{subject}</Text>
      </View>
      {isJoined ? (
        <Text style={styles.statusLabel}>Joined</Text>
      ) : (
        <TouchableOpacity style={styles.joinButton} onPress={onJoin}>
          <Text style={styles.joinButtonText}>Join</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  groupContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  groupImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  groupInfo: {
    flex: 1,
  },
  groupName: {
    fontWeight: "bold",
  },
  joinButton: {
    backgroundColor: "blue",
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  joinButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  statusLabel: {
    fontWeight: "bold",
    color: "green",
  },
});

export default GroupList;
