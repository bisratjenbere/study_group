import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
  ToastAndroid,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Ionicons } from "@expo/vector-icons";
import styles from "./Seeting.style";
import { uploadImage } from "../../utils/upload";

const EditProfile = ({ user, onSave }) => {
  const [editedUser, setEditedUser] = useState({ ...user });
  const [imageUrl, setImageUrl] = useState("");
  const [isUploading, setIsUploading] = useState(false);

  const handleChange = (field, value) => {
    setEditedUser({ ...editedUser, [field]: value });
  };

  const handleChoosePhoto = async () => {
    setIsUploading(true);

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      const imageUri = result.assets[0].uri;

      try {
        const downloadURL = await uploadImage(imageUri, "user.jpeg");

        if (downloadURL) {
          setImageUrl(downloadURL);
          setEditedUser({ ...editedUser, photo: downloadURL });
        }
      } catch (error) {
        console.error("Error uploading image:", error);
      } finally {
        setIsUploading(false);
      }
    }
  };

  const handleSave = async () => {
    if (!isUploading) {
      onSave(editedUser);
    } else {
      Alert.alert("Loading", "File Uploading is in Progress");
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleChoosePhoto}>
        {editedUser.photo ? (
          <Image
            style={styles.profileImage}
            source={{ uri: editedUser.photo }}
          />
        ) : (
          <Image
            style={styles.profileImage}
            source={require("../../assets/image/kemal.jpg")}
          />
        )}

        <Ionicons name="camera" size={30} color="black" />
      </TouchableOpacity>

      <View style={styles.detailItem}>
        <Text style={styles.label}>Name:</Text>
        <TextInput
          style={styles.inputField}
          value={editedUser.name}
          onChangeText={(text) => handleChange("name", text)}
        />
      </View>
      <View style={styles.detailItem}>
        <Text style={styles.label}>Username:</Text>
        <TextInput
          style={styles.inputField}
          value={editedUser.userName}
          onChangeText={(text) => handleChange("userName", text)}
        />
      </View>

      <View style={styles.detailItem}>
        <Text style={styles.label}>Phone Number:</Text>
        <TextInput
          style={styles.inputField}
          value={editedUser.phoneNumber}
          onChangeText={(text) => handleChange("phoneNumber", text)}
        />
      </View>
      <TouchableOpacity onPress={handleSave} style={styles.saveButton}>
        <Text style={styles.saveText}>Save Changes</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EditProfile;
