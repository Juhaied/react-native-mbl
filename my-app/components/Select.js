import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Select(){
    const [selectedGender, setSelectedGender] = useState(null);

  const handleGenderSelect = (gender) => {
    setSelectedGender(gender);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Select Gender</Text>
      <View style={styles.line} />

      <View style={styles.genderContainer}>
        <TouchableOpacity
          style={[
            styles.genderOption,
            selectedGender === 'male' && styles.selectedGender,
          ]}
          onPress={() => handleGenderSelect('male')}
        >
            <Icon name="mars" size={30} color="blue" />
          <Text style={styles.genderText}>Male</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.genderOption,
            selectedGender === 'female' && styles.selectedGender,
          ]}
          onPress={() => handleGenderSelect('female')}
        >
          <Icon name="venus" size={30} color="pink" />
          <Text style={styles.genderText}>Female</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

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
    container: {
        alignItems: 'center',
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
  });