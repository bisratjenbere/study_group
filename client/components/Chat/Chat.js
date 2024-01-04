import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  FlatList,
} from "react-native";
import styles from "./Chat.style";
import RenderItem, { renderItem } from "./RenderIteam";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { chatContext } from "../../context/chat";
import { authContext } from "../../context/authContext";
import useHttp from "../../hooks/use-http";

const StudyGroupChat = ({ groupId }) => {
  const { sendRequest } = useHttp();
  const { message, setMessage } = useContext(chatContext);
  const [chatMessage, setChatMessage] = useState("");
  const { userData } = useContext(authContext);
  const navigation = useNavigation();
  const getUpdatedGroup = (response) => {};
  const goBack = () => {
    navigation.goBack();
  };

  const sendMessage = () => {
    const curr = {
      id: Date.now(),
      content: chatMessage,
      creator: userData.id,
      date: Date.now(),
      group: groupId,
    };

    const newMessage = [...message, { ...curr, creator: userData }];

    setMessage(newMessage);
    setChatMessage("");
    sendRequest(
      {
        url: `http://10.194.65.21:3000/api/v1/messages/${groupId}`,
        method: "POST",
        body: { ...curr },
        headers: { "Content-Type": "application/json" },
      },
      getUpdatedGroup
    );
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
        data={message.slice()}
        renderItem={({ item }) => <RenderItem curUser={userData} item={item} />}
        keyExtractor={(item) => item.id.toString()}
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
