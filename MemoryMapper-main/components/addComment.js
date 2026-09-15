import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { styles } from "../styles/styles";

const AddComment = ({ comment, setComment }) => {
    return (
        <View>
            <Text style={styles.titleText}>Comment:</Text>
            <View style={styles.spaceVertical} />
            <TextInput
                style={[styles.commentField, { height: 100 }]}
                value={comment}
                onChangeText={(text) => setComment(text)}
                placeholder="Write your comment here"
                multiline
            />
        </View>
    );
};

export default AddComment;