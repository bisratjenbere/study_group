import React, { useContext, useEffect, useMemo, useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  FlatList,
} from "react-native";
import styles from "./Chat.style";
import { renderItem } from "./RenderIteam";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { chatContext } from "../../context/chat";
import { authContext } from "../../context/authContext";

const StudyGroupChat = () => {
  const { message, setMessage } = useContext(chatContext);
  const groupId = message.groupId;
  const [chatMessage, setChatMessage] = useState("");
  const { userData } = useContext(authContext);

  const navigation = useNavigation();

  const goBack = () => {
    navigation.goBack();
  };

  const sendMessage = () => {
    const newMessage = [
      ...message,
      {
        id: Date.now(),
        content: "Hi there",
        creator: { ...userData },
        data: Date.now(),
      },
    ];
    console.log(newMessage);
    setMessage(newMessage);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={goBack}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Study Group Chat</Text>
        <Ionicons name="chatbubbles" size={24} />
      </View>
      <FlatList
        style={styles.content}
        data={message.reverse()}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        inverted
      />

      <View style={styles.inputContainer}>
        <TextInput
          value={chatMessage}
          style={styles.input}
          onChangeText={(text) => {
            setChatMessage(text);
          }}
          placeholder="Type your message..."
        />
        <TouchableOpacity style={styles.editButton} onPress={sendMessage}>
          <Text style={styles.editText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default StudyGroupChat;
