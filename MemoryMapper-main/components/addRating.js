import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { styles } from "../styles/styles";

const AddRating = ({ rating, incrementRating, decrementRating }) => {
    return (
        <View style={styles.sameRow}>
            <Text style={styles.titleText}>Rating:</Text>
            <View style={styles.spaceHorizontal} />
            <Text style={styles.titleText}>{rating}/10</Text>
            <View style={styles.spaceHorizontal} />
            <View style={styles.arrowContainer}>
                <TouchableOpacity
                    onPress={incrementRating}
                    style={styles.arrowButton}
                >
                    <Image
                        source={require("../images/arrowUp.png")}
                        style={styles.arrowImage}
                    />
                </TouchableOpacity>
                <View style={styles.spaceVertical}></View>
                <TouchableOpacity
                    onPress={decrementRating}
                    style={styles.arrowButton}
                >
                    <Image
                        source={require("../images/arrowDown.png")}
                        style={styles.arrowImage}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default AddRating;