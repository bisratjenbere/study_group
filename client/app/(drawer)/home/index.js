import { Text, View, StyleSheet, FlatList } from "react-native";
import { Link } from "expo-router";
import { Drawer } from "expo-router/drawer";
import { DrawerToggleButton } from "@react-navigation/drawer";
import Welcome from "../../../components/Group/Unjoined";
import { useContext, useState, useEffect } from "react";
import { COLORS } from "../../../constants";
import GroupList from "../../../components/Group/groupList";
import { ScrollView } from "react-native-gesture-handler";
import { groupContext } from "../../../context/groupContext";
import useHttp from "../../../hooks/use-http";
import { authContext } from "../../../context/authContext";

const transformData = (transformedData, userData) => {
  const transformedArray = transformedData.map((item, index) => {
    return {
      _id: item._id,
      name: item?.name,
      subject: item?.subject,
      photo: item?.photo,
      isJoined: item.members.some((member) => member._id === userData.id),
    };
  });
  return transformedArray;
};

export default function Page() {
  const [searchTerm, setSearchTerm] = useState("");
  const { groupData, setGroupData } = useContext(groupContext);
  const { userData } = useContext(authContext);
  const { sendRequest } = useHttp();
  const getAllGroup = (response) => {
    const groupData = response.data;
    const transformed = transformData(groupData, userData);

    setGroupData(transformed);
  };
  useEffect(() => {
    sendRequest(
      {
        url: "http://10.194.65.21:3000/api/v1/groups",
      },
      getAllGroup
    );
  }, []);

  const handleJoin = (groupId) => {
    sendRequest(
      {
        url: `http://10.194.65.21:3000/api/v1/groups/${groupId}`,
        method: "PATCH",
        body: { members: userData.id },
        headers: { "Content-Type": "application/json" },
      },
      getUpdatedGroup
    );
  };

  const getUpdatedGroup = (response) => {
    const updateGroupData = response.data;
    const { _id: groupID } = updateGroupData;
    const allGroup = groupData.filter((group) => group._id !== groupID);
    const currGroup = groupData.filter((group) => group._id == groupID)[0];
    const transformed = [...allGroup, { ...currGroup, isJoined: true }];

    setGroupData(transformed);
  };

  const handleSearchClick = () => {
    if (searchTerm.length !== 0) {
      let filteredGroups = groupData.filter(
        (item) =>
          item.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
          item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      if (!filteredGroups) {
        return <Text>No Group With this Name or Subject</Text>;
      }
      setGroupData(filteredGroups);
    } else {
      sendRequest(
        {
          url: "http://10.194.65.19:3000/api/v1/groups",
        },
        getAllGroup
      );
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Drawer.Screen
        options={{
          headerShown: true,
          headerTitleStyle: { color: "#fff" },
          headerStyle: { backgroundColor: "#1640D6", padding: 10 },
          headerLeft: () => <DrawerToggleButton />,
        }}
      />
      <Welcome
        data={userData}
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        handleClick={handleSearchClick}
      />

      <ScrollView
        showsHorizontalScrollIndicator="true"
        style={{ marginBottom: 10, marginTop: 20 }}
      >
        {groupData.map((item, index) => (
          <GroupList
            key={index}
            name={item.name}
            subject={item.subject}
            photo={item.photo}
            isJoined={item.isJoined}
            onJoin={() => handleJoin(item._id)}
          />
        ))}
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
