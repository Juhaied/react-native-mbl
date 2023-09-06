import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Select() {
  const genders = [
    { id: 'male', label: 'Male', icon: 'mars', color: 'blue' },
    { id: 'female', label: 'Female', icon: 'venus', color: 'pink' },
  ];

  const [selectedGender, setSelectedGender] = useState(null);

  const handleGenderSelect = (genderId) => {
    setSelectedGender(genderId);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Select Gender</Text>
      <View style={styles.line} />

      <View style={styles.genderContainer}>
        {genders.map((gender, index) => (
          <TouchableOpacity
            key={gender.id}
            style={[
              styles.genderBox,
              selectedGender === gender.id && styles.selectedGender,
              index !== 0 && { marginLeft: 20 }, 
            ]}
            onPress={() => handleGenderSelect(gender.id)}
          >
            <Icon name={gender.icon} size={40} color={gender.color} />
            <Text style={styles.genderText}>{gender.label}</Text>
            <View style={styles.radioButton}>
              {selectedGender === gender.id && (
                <View style={styles.radioButtonInner} />
              )}
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  line: {
    width: '80%',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 20,
  },
  genderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  genderBox: {
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 10, 
    padding: 20,
    minWidth: 110, 
    flexDirection: 'column', 
  },
  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#ccc',
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioButtonInner: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#40e0d0',
  },
  
  genderText: {
    fontSize: 22,
    marginTop: 5,
  },
});
