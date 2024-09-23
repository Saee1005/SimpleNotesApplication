import React, { useState } from 'react';
import { SafeAreaView, TextInput, Button, FlatList, Text, View } from 'react-native';

const App = () => {
  const [note, setNote] = useState('');
  const [notes, setNotes] = useState<string[]>([]);

  const addNote = () => {
    if (note.trim()) {
      setNotes([...notes, note]);
      setNote(''); // Clear the input
    }
  };

  const deleteNote = (index: number) => {
    setNotes(notes.filter((_, i) => i !== index));
  };

  return (
    <SafeAreaView style={{ flex: 1, padding: 16 }}>
      <TextInput
        placeholder="Enter your note"
        value={note}
        onChangeText={setNote}
        style={{
          borderBottomWidth: 1,
          borderColor: '#000',
          marginBottom: 10,
          padding: 5,
        }}
      />
      <Button title="Add Note" onPress={addNote} />
      <FlatList
        data={notes}
        renderItem={({ item, index }) => (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingVertical: 8,
              borderBottomWidth: 1,
              borderColor: '#ccc',
            }}
          >
            <Text>{item}</Text>
            <Button title="Delete" onPress={() => deleteNote(index)} />
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </SafeAreaView>
  );
};

export default App;
