import React, { useState, useEffect } from "react";
import { View, Keyboard, Platform, Text, ScrollView } from "react-native";
import { styles } from "../../styles/styles";
import { insertMemory, updateMemoryById } from "../../helper/databaseHelper";
import {
  pickImage,
  pickImageFromCamera,
  getCurrentLocationAndSetStates,
} from "../../helper/phoneHelper";
import AddTitle from "../../components/addTitle";
import AddLocation from "../../components/addLocation";
import AddImage from "../../components/addImage";
import AddRating from "../../components/addRating";
import AddComment from "../../components/addComment";
import AddActionButtons from "../../components/addActionButtons";

export default function AddScreen({ navigation, route }) {
  const [id, setId] = useState(null);
  const [title, setTitle] = useState("");
  const [longitude, setLongitude] = useState("");
  const [latitude, setLatitude] = useState("");
  const [imagePath, setImagePath] = useState("");
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [wantToUpdate, setWantToUpdate] = useState(false);
  const [marginTop, setMarginTop] = useState(0);

  const handleKeyboardDidShow = (event) => {
    const keyboardHeight = event.endCoordinates.height - 40;
    setMarginTop(-keyboardHeight);
  };

  const handleKeyboardDidHide = () => {
    setMarginTop(0);
  };

  useEffect(() => {
    if (Platform.OS === "android") {
      const keyboardDidShowListener = Keyboard.addListener(
        "keyboardDidShow",
        handleKeyboardDidShow,
      );

      const keyboardDidHideListener = Keyboard.addListener(
        "keyboardDidHide",
        handleKeyboardDidHide,
      );

      // Clean up listeners on component unmount
      return () => {
        keyboardDidShowListener.remove();
        keyboardDidHideListener.remove();
      };
    }
  }, []);

  useEffect(() => {
    if (route.params) {
      const { memory } = route.params;
      const [latitude, longitude] = memory.location.split(",");
      setId(memory.id);
      setTitle(memory.title);
      setLongitude(longitude);
      setLatitude(latitude);
      setImagePath(memory.imagePath);
      setRating(memory.rating);
      setComment(memory.comment);
      setWantToUpdate(true);
    }
  }, [route.params]);

  const incrementRating = () => {
    if (rating < 10) {
      setRating(rating + 1);
    }
  };

  const decrementRating = () => {
    if (rating > 0) {
      setRating(rating - 1);
    }
  };

  const resetStates = () => {
    setId(null);
    setTitle("");
    setLongitude("");
    setLatitude("");
    setImagePath("");
    setRating(5);
    setComment("");
    setWantToUpdate(false);
  };

  const handleAddButton = () => {
    if (title && latitude && longitude && rating) {
      const location = `${latitude}, ${longitude}`;
      if (!imagePath) {
        setImagePath("");
      }
      insertMemory(title, imagePath, location, rating, comment);
      resetStates();
    } else {
      alert("Please fill at least the title and location.");
    }
  };

  const handleUpdateButton = () => {
    if (id != null && title && latitude && longitude && rating) {
      const location = `${latitude}, ${longitude}`;
      if (!imagePath) {
        setImagePath("");
      }
      if (!comment) {
        setComment("");
      }
      updateMemoryById(id, title, imagePath, location, rating, comment);
      resetStates();
      setId(null);
      setWantToUpdate(false);
      navigation.navigate("List");
    } else {
      alert("Please fill at least the title and location.");
    }
  };

  return (
    <ScrollView style={styles.containerList}>
      {wantToUpdate ? (
        <Text style={styles.titleAddUpdate}>Update</Text>
      ) : (
        <Text style={styles.titleAddUpdate}>Add</Text>
      )}
      <View style={{ flex: 1 }}>
        <AddTitle title={title} setTitle={setTitle} />

        <View style={styles.spaceVertical} />

        <AddLocation
          latitude={latitude}
          longitude={longitude}
          setLongitude={setLongitude}
          setLatitude={setLatitude}
          getCurrentLocationAndSetStates={getCurrentLocationAndSetStates}
        />

        <View style={styles.spaceVerticalBig} />

        <AddImage
          imagePath={imagePath}
          setImagePath={setImagePath}
          pickImage={pickImage}
          pickImageFromCamera={pickImageFromCamera}
        />

        <View style={styles.spaceVerticalBig} />

        <AddRating
          rating={rating}
          incrementRating={incrementRating}
          decrementRating={decrementRating}
        />

        <View style={styles.spaceVertical} />

        <AddComment comment={comment} setComment={setComment} />

        <View style={styles.spaceVertical} />

        <AddActionButtons
          wantToUpdate={wantToUpdate}
          handleUpdateButton={handleUpdateButton}
          handleAddButton={handleAddButton}
          resetStates={resetStates}
        />
      </View>
    </ScrollView>
  );
}
