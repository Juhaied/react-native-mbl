import { StyleSheet, Text, View, TextInput } from 'react-native';
import React, { useState } from 'react';

export default function Practice2() {
  const [buildingName, setBuildingName] = useState('');
  const [apartmentNo, setApartmentNo] = useState('');
  const [state, setState] = useState('');
  const [contact, setContact] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Details</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Building Name"
          placeholderTextColor="#999"
          value={buildingName}
          onChangeText={(text) => setBuildingName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Apartment No."
          placeholderTextColor="#999"
          value={apartmentNo}
          onChangeText={(text) => setApartmentNo(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="State"
          placeholderTextColor="#999"
          value={state}
          onChangeText={(text) => setState(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Phone/E-mail"
          placeholderTextColor="#999"
          value={contact}
          onChangeText={(text) => setContact(text)}
        />
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    width: '80%',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    textAlign: 'right', // Align text to the right
  },
});