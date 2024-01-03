import React, { useContext, useState } from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
  Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { authContext } from "../../context/authContext";
import useHttp from "../../hooks/use-http";
import { groupContext } from "../../context/groupContext";
import { uploadImage } from "../../utils/upload";
import { useRouter, usePathname } from "expo-router";

const CreateGroup = () => {
  const router = useRouter();

  const { sendRequest } = useHttp();
  const [groupName, setGroupName] = useState("");
  const [groupSubject, setGroupSubject] = useState("");
  const [groupPhoto, setGroupPhoto] = useState("");
  const { setGroupData } = useContext(groupContext);
  const { userData } = useContext(authContext);
  const onCreateGroup = (groupData) => {
    console.log(groupData.data);

    const { _id: id, name, subject, members, admin } = groupData.data;

    setGroupData((prevdata) => [
      ...prevdata,
      { id, name, subject, admin, members },
    ]);

    setGroupName("");
    setGroupSubject("");
    router.push("/groups");
    Alert.alert(
      " Group Magic! ",
      "Congratulations! You just sparked a new connection ✨"
    );
  };

  const handleCreateGroup = async () => {
    const groupToBeCreated = {
      name: groupName,
      subject: groupSubject,
      admin: userData.id,
      members: userData.id,
    };
    if (groupPhoto) {
      groupToBeCreated.photo = groupPhoto;
      console.log(groupToBeCreated);
    }

    if (groupName.length > 1 && groupSubject.length > 1) {
      sendRequest(
        {
          url: "http://10.194.65.19:3000/api/v1/groups",
          method: "POST",
          body: { ...groupToBeCreated },
          headers: { "Content-Type": "application/json" },
        },
        onCreateGroup
      );
    } else {
      Alert.alert("Oops! Missing Details");
    }
  };

  const handleChoosePhoto = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      const selectedImage = result.assets[0].uri;
      if (selectedImage) {
        try {
          const downloadURL = await uploadImage(selectedImage, "group.jpeg");
          setGroupPhoto(downloadURL);
        } catch (error) {
          Alert.alert("Error", "Error uploading image");
        }
      } else {
        console.log("Please select an image first!");
      }
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter Group Name"
        value={groupName}
        onChangeText={(text) => setGroupName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter Subject"
        value={groupSubject}
        onChangeText={(text) => setGroupSubject(text)}
      />
      <TouchableOpacity onPress={handleChoosePhoto} style={styles.photoButton}>
        {groupPhoto ? (
          <Image source={{ uri: groupPhoto }} style={styles.groupPhoto} />
        ) : (
          <Text style={styles.photoText}>Choose Group Photo</Text>
        )}
      </TouchableOpacity>
      <TouchableOpacity onPress={handleCreateGroup} style={styles.createButton}>
        <Text style={styles.createText}>Create Group</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    width: "100%",
    padding: 10,
    marginBottom: 20,
  },
  photoButton: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    width: "100%",
    height: 200,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  groupPhoto: {
    width: "100%",
    height: "100%",
    borderRadius: 5,
  },
  photoText: {
    color: "#555",
  },
  createButton: {
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 5,
  },
  createText: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default CreateGroup;
