import React, { useState, useEffect, useContext } from "react";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import styles from "./Joined.style";
import { useRouter } from "expo-router";
import { COLORS } from "../../constants";
import { groupContext } from "../../context/groupContext";

const StudyGroups = () => {
  const { groupData } = useContext(groupContext);

  const groupUserJoined = groupData.filter((group) => group.isJoined === true);

  const router = useRouter();

  return (
    <ScrollView>
      {groupUserJoined.map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={() =>
            router.push(`/(drawer)/groups/groupdetail/${item._id}`)
          }
        >
          <View style={styles.groupItem}>
            {item.photo ? (
              <Image source={{ uri: item.photo }} style={styles.groupImage} />
            ) : (
              <Image
                source={require("../../assets/image/kemal.jpg")}
                style={styles.groupImage}
              />
            )}

            <View>
              <Text style={styles.groupName}>{item.name}</Text>
              <Text style={styles.groupSubject}>{item.subject}</Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default StudyGroups;
