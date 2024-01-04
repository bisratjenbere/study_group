// RenderItem.js
import React from "react";
import { View, Text, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./Chat.style";

const RenderItem = React.memo(({ item, curUser }) => (
  <View
    style={[
      styles.messageContainer,
      item.creator?.id === curUser.id && styles.sentMessage,
    ]}
  >
    <View style={styles.userInfo}>
      {item.photo ? (
        <Image source={item?.photo} style={styles.userPhoto} />
      ) : (
        <Ionicons name="person-circle-outline" size={24} color="black" />
      )}
      <Text style={styles.userName}>{item.creator?.userName}</Text>
    </View>
    <Text style={styles.messageText}>{item?.content}</Text>
  </View>
));

export default RenderItem;
