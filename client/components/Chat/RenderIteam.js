import { View, TouchableOpacity, Text, Image } from "react-native";
import styles from "./Chat.style";
import { Ionicons } from "@expo/vector-icons";

export const renderItem = ({ item, setLike }) => (
  <View
    style={[
      styles.messageContainer,
      item.sender === "You" && styles.sentMessage,
    ]}
  >
    <View style={styles.userInfo}>
      {item.photo ? (
        <Image source={item.photo} style={styles.userPhoto} />
      ) : (
        <Ionicons name="person-circle-outline" size={24} color="black" />
      )}
      <Text style={styles.userName}>{item.creator.userName}</Text>
    </View>
    <Text style={styles.messageText}>{item.content}</Text>
  </View>
);
