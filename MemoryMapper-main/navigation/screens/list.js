import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, Alert } from "react-native";
import { getAllItems, deleteMemoryById } from "../../helper/databaseHelper";
import { DataTable } from "react-native-paper";
import MemoryRow from "../../components/memoryRow";
import { styles } from "../../styles/styles";

function ListScreen({ navigation, route }) {
  const [memories, setMemories] = useState([]);
  const [expandedMemoryId, setExpandedMemoryId] = useState(null);

  useEffect(() => {
    if (route.params) {
      const { memoryId } = route.params;
      setExpandedMemoryId(memoryId);
    }
  }, [route.params]);

  const fetchData = () => {
    getAllItems((memories) => {
      setMemories(memories);
    });
  };

  const handleDeleteAndFetch = (memoryId) => {
    Alert.alert(
      "Delete Memory",
      "Are you sure you want to delete this memory?",
      [
        {
          text: "Cancel",
          style: "cancel"
        },
        { 
          text: "OK", 
          onPress: () => {
            deleteMemoryById(memoryId);
            fetchData();
          } 
        }
      ]
    );
  };

  const handleUpdate = (memory) => {
    navigation.navigate("Add/Update", { memory });
  };

  const handleMapView = (memory) => {
    const [latitude, longitude] = memory.location.split(",");
    navigation.navigate("Map", {
      latitude: parseFloat(latitude),
      longitude: parseFloat(longitude),
      latitudeDelta: 0.02108646712062523,
      longitudeDelta: 0.01776695251464755,
    });
  };

  useEffect(() => {
    const focusListener = navigation.addListener("focus", () => {
      fetchData();
    });

    return () => {
      focusListener();
    };
  }, [navigation]);

  return (
    <ScrollView style={styles.containerList}>
      <View>
        <Text style={styles.titleList}>Memories</Text>
        <DataTable>
          {memories.map((memory, index) => (
            <MemoryRow
              key={memory.id}
              memory={memory}
              index={index}
              expandedMemoryId={expandedMemoryId}
              setExpandedMemoryId={setExpandedMemoryId}
              handleMapView={handleMapView}
              handleUpdate={handleUpdate}
              handleDeleteAndFetch={handleDeleteAndFetch}
            />
          ))}
        </DataTable>
        <View style={styles.spaceVerticalBig}/>
      </View>
    </ScrollView>
  );
}

export default ListScreen;
