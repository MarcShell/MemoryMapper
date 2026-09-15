import React from "react";
import { TouchableOpacity, View, Text, Image } from "react-native";
import { DataTable } from "react-native-paper";
import { styles } from "../styles/styles";

const MemoryRow = ({
  memory,
  index,
  expandedMemoryId,
  setExpandedMemoryId,
  handleMapView,
  handleUpdate,
  handleDeleteAndFetch,
}) => {
  return (
    <TouchableOpacity
      onPress={() =>
        setExpandedMemoryId(memory.id === expandedMemoryId ? null : memory.id)
      }
      style={styles.touchableRow}
    >
      <View>
        <DataTable.Row key={index}>
          <DataTable.Cell>
            <Text style={styles.bold}>{memory.title}</Text>
          </DataTable.Cell>
          <DataTable.Cell numeric>{memory.rating}/10</DataTable.Cell>
        </DataTable.Row>
        {memory.id === expandedMemoryId && (
          <>
            <View style={styles.expandedMemoryInfo}>
              <View style={styles.flex1}>
                {memory.imagePath ? (
                  <Image
                    source={{ uri: memory.imagePath }}
                    style={styles.imageSizeBig}
                  />
                ) : (
                  <Text style={styles.cursive}>No Image</Text>
                )}
              </View>
              <View style={styles.flex1}>
                {memory.comment ? (
                  <Text>{memory.comment}</Text>
                ) : (
                  <Text style={styles.cursive}>No Comment</Text>
                )}
              </View>
            </View>

            <DataTable.Row>
              <View
                style={styles.expandedMemoryIcons}
              >
                <TouchableOpacity
                  onPress={() => handleMapView(memory)}
                  style={styles.touchableIcon}
                >
                  <Image
                    source={require("../images/gps2.png")}
                    style={styles.iconSizeMedium}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => handleUpdate(memory)}
                  style={styles.touchableIcon}
                >
                  <Image
                    source={require("../images/edit.png")}
                    style={styles.iconSizeMedium}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => handleDeleteAndFetch(memory.id)}
                  style={styles.touchableIcon}
                >
                  <Image
                    source={require("../images/delete.png")}
                    style={styles.iconSizeMedium}
                  />
                </TouchableOpacity>
              </View>
            </DataTable.Row>
          </>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default MemoryRow;
