import React, { useCallback, useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

import { COLORS } from "../../constants";

import { useRouter, usePathname } from "expo-router/src/hooks";
import { useNavigation } from "expo-router/src/useNavigation";

import UserList from "./User";
import useHttp from "../../hooks/use-http";

const GroupDetail = ({ groupData, groupId }) => {
  const { sendRequest } = useHttp();
  const groupDataDetail = groupData[0];
  const [currentData, setCurrentData] = useState(groupDataDetail);

  const handleJoinGroup = useCallback((item) => {
    setCurrentData({ ...currentData, members: [...currentData.members, item] });
  });

  const renderUserIcon = (photoUrl) => {
    if (photoUrl) {
      return <Image source={{ uri: photoUrl }} style={styles.memberImage} />;
    } else {
      return <Ionicons name="person-circle-outline" size={50} color="black" />;
    }
  };
  const path = usePathname();

  const [isAddMember, setIsAddMember] = useState("");

  const router = useRouter();
  const navigation = useNavigation();
  const getUpdatedGroup = (response) => {};

  const goToChat = () => {
    sendRequest(
      {
        url: `http://10.194.65.21:3000/api/v1/groups/${groupId}`,
        method: "PATCH",
        body: { members: currentData.members },
        headers: { "Content-Type": "application/json" },
      },
      getUpdatedGroup
    );

    router.push(`/groups/groupdetail/chat/${groupId}`);
  };
  const getMemberLoaded = (response) => {
    console.log(response);
  };
  const goBack = () => {
    navigation.goBack();
    sendRequest(
      {
        url: `http://10.194.65.21:3000/api/v1/groups/${groupId}`,
        method: "PATCH",
        body: { members: currentData.members },
        headers: { "Content-Type": "application/json" },
      },
      getMemberLoaded
    );
  };
  const addMember = () => {
    setIsAddMember(true);
  };
  const handleBackIcon = () => {
    setIsAddMember(false);
  };
  if (isAddMember) {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={handleBackIcon}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <UserList
          addMemberTostate={handleJoinGroup}
          members={currentData.members}
          setIsAddMember={setIsAddMember}
        />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={goBack}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Group Detail</Text>
        <TouchableOpacity onPress={goToChat}>
          <Ionicons name="chatbox" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <View style={styles.groupHeader}>
          <Image
            source={{ uri: currentData.photo }}
            style={styles.groupImage}
          />

          <View style={styles.groupInfo}>
            <Text style={styles.groupName}>{currentData.name}</Text>
            <Text style={styles.groupSubject}>{currentData.subject}</Text>
            <Text style={styles.adminName}>
              Admin: {groupDataDetail.admin?.name || "Bisrat"}
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text style={styles.membersHeader}>Group Members:</Text>
          <TouchableOpacity onPress={addMember} style={styles.addMemberButton}>
            <Text style={styles.addMemberText}>Add Member</Text>
          </TouchableOpacity>
        </View>
        {currentData.members.length > 0 && (
          <FlatList
            data={currentData.members}
            keyExtractor={(item) => item._id}
            renderItem={({ item }) => (
              <View style={styles.memberItem}>
                {renderUserIcon(item.photo)}
                <Text>{item.name}</Text>
              </View>
            )}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    paddingHorizontal: 20,
    backgroundColor: COLORS.lightWhite,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  content: {
    flex: 1,
    margin: 10,
  },
  groupHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  groupImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 20,
  },
  groupInfo: {
    flex: 1,
  },
  groupName: {
    fontSize: 20,
    fontWeight: "bold",
  },
  groupSubject: {
    fontSize: 16,
    color: "#888",
    marginBottom: 10,
  },
  adminName: {
    fontSize: 16,
    color: "#555",
  },
  membersHeader: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  memberItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  memberImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  addMemberButton: {
    backgroundColor: "#007AFF",
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 5,
  },
  addMemberText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default GroupDetail;
