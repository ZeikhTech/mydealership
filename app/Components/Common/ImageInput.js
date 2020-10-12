import React, { useEffect } from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

import colors from "../../Config/colors";

function ImageInput({ imageUri, onChangeImage }) {
  const requestPermission = async () => {
    const { granted } = await ImagePicker.requestCameraRollPermissionsAsync();
    if (!granted) alert("You need to enable permission to access the library.");
  };

  const handlePress = () => {
    if (!imageUri) selectImage();
    requestPermission();
  };

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5
      });
      if (!result.cancelled) onChangeImage(result.uri);
      console.log(result.uri);
    } catch (error) {
      console.log("Error reading an image", error);
    }
  };

  return (
    <>
      <TouchableWithoutFeedback onPress={handlePress}>
        <View style={styles.container}>
          <View style={styles.innerCircle}>
            {!imageUri && (
              <MaterialCommunityIcons
                style={styles.profileIcon}
                color={colors.medium}
                name="account-circle"
                size={100}
              />
            )}
            {imageUri && (
              <>
                <Image source={{ uri: imageUri }} style={styles.image} />
                <MaterialCommunityIcons
                  onPress={selectImage}
                  style={styles.editIcon}
                  name="pencil"
                  size={23}
                />
              </>
            )}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: colors.light,
    borderRadius: 50,
    height: 100,
    justifyContent: "center",
    marginVertical: 10,
    width: 100,
    borderWidth: 2,
    borderColor: "grey"
  },
  profileIcon: {
    left: -8,
    top: -8,
    width: 100,
    height: 100
  },
  innerCircle: {
    borderRadius: 50,
    width: 85,
    height: 85,
    margin: 5,
    backgroundColor: "white"
  },
  image: {
    height: "100%",
    width: "100%",
    borderRadius: 50
  },
  editIcon: {
    backgroundColor: colors.primary,
    borderRadius: 50,
    position: "absolute",
    height: 25,
    width: 25,
    right: -7,
    bottom: 15
  }
});

export default ImageInput;
