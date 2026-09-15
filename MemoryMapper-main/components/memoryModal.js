import React from "react";
import { View, Text, Modal, TouchableOpacity, Image } from "react-native";
import { styles } from "../styles/styles";

const MemoryModal = ({
  modalVisible,
  memory,
  setModalVisible,
  handleListButton,
}) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(false)}
    >
      {memory && (
        <View style={styles.modalContainer}>
          <TouchableOpacity
            style={styles.modalCloseButton}
            onPress={() => setModalVisible(false)}
          >
            <Text style={styles.modalCloseButtonText}>X</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.modalListButton}
            onPress={() => handleListButton(memory.id)}
          >
            <Image
              source={require("../images/listModal.png")}
              style={styles.iconSizeMedium}
            />
          </TouchableOpacity>
          <View style={styles.spaceVerticalBig} />
          <Text style={styles.modalTitle}>{memory.title}</Text>
          {memory.imagePath && (
            <Image
              source={{ uri: memory.imagePath }}
              style={styles.modalImage}
            />
          )}
          <Text style={styles.modalText}>{memory.rating}/10</Text>
          {memory.comment && (
            <Text style={styles.modalText}>{memory.comment}</Text>
          )}
        </View>
      )}
    </Modal>
  );
};

export default MemoryModal;
