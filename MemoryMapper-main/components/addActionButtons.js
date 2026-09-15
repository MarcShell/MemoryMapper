import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from "../styles/styles";

const AddActionButtons = ({ wantToUpdate, handleUpdateButton, handleAddButton, resetStates }) => {
    return (
        <View style={styles.buttonContainer}>
            {wantToUpdate ? (
                <TouchableOpacity
                    onPress={handleUpdateButton}
                    style={styles.addButton}
                >
                    <Text style={styles.buttonTextWhite}>Update Memory</Text>
                </TouchableOpacity>
            ) : (
                <TouchableOpacity
                    onPress={handleAddButton}
                    style={styles.addButton}
                >
                    <Text style={styles.buttonTextWhite}>Add Memory</Text>
                </TouchableOpacity>
            )}
            <TouchableOpacity onPress={resetStates} style={styles.cancelButton}>
                <Text style={styles.buttonTextGreen}>Cancel</Text>
            </TouchableOpacity>
        </View>
    );
};

export default AddActionButtons;