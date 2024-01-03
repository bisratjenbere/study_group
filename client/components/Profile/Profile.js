import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./Profile.style";

const UserDetails = ({ user, onEdit }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {user.photo ? (
          <Image style={styles.profileImage} source={{ uri: user.photo }} />
        ) : (
          <Image
            style={styles.profileImage}
            source={require("../../assets/image/study.jpg")}
          />
        )}

        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.userName}>{`@${user.userName}`}</Text>
      </View>
      <View style={styles.details}>
        <View style={styles.detailItem}>
          <Text style={styles.label}>Phone Number:</Text>
          <Text style={styles.info}>{user.phoneNumber}</Text>
        </View>
      </View>
      <TouchableOpacity onPress={onEdit} style={styles.editButton}>
        <Text style={styles.editText}>Edit Profile</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UserDetails;
