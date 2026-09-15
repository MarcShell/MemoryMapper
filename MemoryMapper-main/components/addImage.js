import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { styles } from "../styles/styles";

const AddImage = ({
  imagePath,
  setImagePath,
  pickImage,
  pickImageFromCamera,
}) => {
  return (
    <View>
      <Text style={styles.titleText}>Image:</Text>
      <View style={styles.sameRow}>
        <TouchableOpacity
          onPress={() => pickImage(setImagePath)}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Pick Image</Text>
        </TouchableOpacity>
        <View style={styles.spaceHorizontal} />
        <TouchableOpacity
          onPress={() => pickImageFromCamera(setImagePath)}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Camera</Text>
        </TouchableOpacity>
        <View style={styles.spaceHorizontal} />
        <View style={styles.spaceHorizontal} />
        <View style={styles.spaceHorizontal} />
        <View style={styles.spaceHorizontal} />
        <View style={[styles.centerContainer]}>
          {imagePath && (
            <View>
              <Image source={{ uri: imagePath }} style={styles.image} />
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setImagePath("")}
              >
                <Text>X</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

export default AddImage;
