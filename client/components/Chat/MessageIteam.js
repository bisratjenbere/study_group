import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const MessageItem = ({ message }) => {
  const imageUrl = message.senderImage;

  return (
    <View style={styles.container}>
      <View style={styles.senderInfo}>
        <Image source={{ uri: imageUrl }} style={styles.senderImage} />
        <Text style={styles.sender}>Sender: {message.sender}</Text>
      </View>
      <Text style={styles.date}>Date: {message.date}</Text>
      <Text style={styles.content}>Content: {message.content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
    backgroundColor: "#fff",
  },
  senderInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  senderImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  sender: {
    fontWeight: "bold",
  },
  date: {
    fontStyle: "italic",
    color: "#888",
    marginBottom: 6,
  },
  content: {
    fontSize: 16,
  },
});

export default MessageItem;
