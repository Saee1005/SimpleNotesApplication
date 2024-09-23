import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Note = ({ title, content, onDelete }) => {
  return (
    <View style={styles.note}>
      <Text style={styles.title}>{title}</Text>
      <Text>{content}</Text>
      <TouchableOpacity onPress={onDelete}>
        <Text style={styles.delete}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  note: {
    padding: 10,
    margin: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
  },
  title: {
    fontWeight: 'bold',
  },
  delete: {
    color: 'red',
    marginTop: 5,
  },
});

export default Note;
