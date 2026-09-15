import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { styles } from '../styles/styles';

const AddTitle = ({ title, setTitle }) => {
  return (
    <View style={styles.sameRow}>
      <Text style={styles.titleText}>Title:</Text>
      <View style={styles.spaceHorizontal} />
      <TextInput
        style={[styles.inputField, { flex: 1 }]}
        value={title}
        onChangeText={(title) => setTitle(title)}
        placeholder="Enter title"
      />
    </View>
  );
};

export default AddTitle;