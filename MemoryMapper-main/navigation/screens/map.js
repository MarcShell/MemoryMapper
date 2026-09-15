import { StatusBar } from "expo-status-bar";
import { Platform, TouchableOpacity, View, Image } from "react-native";
import React, { useState, useEffect, useRef } from "react";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { styles } from "../../styles/styles";
import logo from "../../images/logo.png";
import darkMapStyle from "../../styles/darkMapStyle.json";
import lightMapStyle from "../../styles/lightMapStyle.json";
import { getAllItems, updateMemoryById } from "../../helper/databaseHelper";
import MemoryModal from "../../components/memoryModal";

export default function MapScreen({ navigation, route }) {
  const mapRef = useRef(null);
  const [memories, setMemories] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalMemory, setModalMemory] = useState(null);

  const initialRegionGermany = {
    latitude: 51.1657,
    latitudeDelta: 10,
    longitude: 10.4515,
    longitudeDelta: 10,
  };

  useEffect(() => {
    if (route.params && mapRef.current) {
      const { latitude, longitude, latitudeDelta, longitudeDelta } =
        route.params;
      mapRef.current.animateToRegion(
        { latitude, longitude, latitudeDelta, longitudeDelta },
        500,
      );
    }
  }, [route.params]);

  useEffect(() => {
    const focusListener = navigation.addListener("focus", () => {
      fetchData();
    });

    return () => {
      focusListener();
    };
  }, [navigation]);

  const fetchData = () => {
    // Fetch data from the database
    getAllItems((memories) => {
      setMemories(memories);
    });
  };

  const handleOnDragEnd = (memory, e, index) => {
    const location = `${e.nativeEvent.coordinate.latitude}, ${e.nativeEvent.coordinate.longitude}`;
    updateMemoryById(
      memory.id,
      memory.title,
      memory.imagePath,
      location,
      memory.rating,
      memory.comment,
    );
    memories[index].location = location;
  };

  const openMemoryModal = (memory) => {
    // Open modal with memory details
    setModalMemory(memory);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleListButton = (memoryId) => {
    closeModal();
    navigation.navigate("List", {
      memoryId,
    });
  };

  const showMemories = () => {
    return memories.map((memory, index) => {
      // Split the location string into latitude and longitude
      const [latitude, longitude] = memory.location.split(",").map(parseFloat);

      return (
        <Marker
          draggable
          key={index}
          coordinate={{ latitude, longitude }}
          onDragEnd={(e) => handleOnDragEnd(memory, e, index)}
          onPress={() => openMemoryModal(memory)}
        >
          <Image source={logo} style={{ width: 40, height: 40 }} />
        </Marker>
      );
    });
  };

  return (
    <View style={styles.container2}>
      {/* MapView section */}
      {darkMode ? (
        <MapView
          ref={mapRef}
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          initialRegion={initialRegionGermany}
          showsCompass={true}
          showsUserLocation={true}
          showsMyLocationButton={true}
          customMapStyle={darkMapStyle}
        >
          {showMemories()}
        </MapView>
      ) : (
        <MapView
          ref={mapRef}
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          initialRegion={initialRegionGermany}
          showsCompass={true}
          showsUserLocation={true}
          showsMyLocationButton={true}
          customMapStyle={lightMapStyle}
        >
          {showMemories()}
        </MapView>
      )}

      {/* Dark mode toggle button */}
      {Platform.OS === "android" ? (
        <TouchableOpacity
          onPress={() => setDarkMode((prevState) => !prevState)}
          style={styles.darkModeButtonAndroid}
        >
          {darkMode ? (
            <Image
              source={require("../../images/sun.png")}
              style={styles.iconSizeBig}
            />
          ) : (
            <Image
              source={require("../../images/moon.png")}
              style={styles.iconSizeBig}
            />
          )}
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => setDarkMode((prevState) => !prevState)}
          style={styles.darkModeButtonIos}
        >
          {darkMode ? (
            <Image
              source={require("../../images/sun.png")}
              style={styles.iconSizeBig}
            />
          ) : (
            <Image
              source={require("../../images/moon.png")}
              style={styles.iconSizeBig}
            />
          )}
        </TouchableOpacity>
      )}
      {modalVisible && (
        <TouchableOpacity
          onPress={closeModal}
          style={styles.overlay}
          activeOpacity={1}
        />
      )}

      <StatusBar style="auto" />

      <MemoryModal
        modalVisible={modalVisible}
        memory={modalMemory}
        setModalVisible={setModalVisible}
        handleListButton={handleListButton}
      />
    </View>
  );
}
