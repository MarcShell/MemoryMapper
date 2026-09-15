import React from "react";
import { View, TextInput, TouchableOpacity, Image, Text } from "react-native";
import { styles } from "../styles/styles";

const AddLocation = ({
  latitude,
  longitude,
  setLongitude,
  setLatitude,
  getCurrentLocationAndSetStates,
}) => {
  const handleLongitudeChange = (text) => {
    // Validate if the input is a valid number
    if (/^-?\d*\.?\d*$/.test(text)) {
      setLongitude(text);
    } else {
      alert(
        "Please enter a valid number. Only numbers and dots are allowed. Example: 7.84"
      );
    }
  };

  const handleLatitudeChange = (text) => {
    // Validate if the input is a valid number
    if (/^-?\d*\.?\d*$/.test(text)) {
      setLatitude(text);
    } else {
      alert(
        "Please enter a valid number. Only numbers and dots are allowed. Example: 48.78"
      );
    }
  };

  return (
    <>
      <Text style={styles.titleText}>Location:</Text>
      <View style={styles.sameRow}>
        <TextInput
          style={[styles.inputField, { flex: 1 }]}
          value={latitude}
          onChangeText={handleLatitudeChange}
          placeholder="Latitude"
          keyboardType="numeric"
        />
        <View style={styles.spaceHorizontal} />
        <TextInput
          style={[styles.inputField, { flex: 1 }]}
          value={longitude}
          onChangeText={handleLongitudeChange}
          placeholder="Longitude"
          keyboardType="numeric"
        />
        <View style={styles.spaceHorizontal} />
        <View>
          <TouchableOpacity
            onPress={() =>
              getCurrentLocationAndSetStates(setLongitude, setLatitude)
            }
          >
            <Image
              source={require("../images/gps.png")}
              style={styles.gpsImage}
            />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default AddLocation;
