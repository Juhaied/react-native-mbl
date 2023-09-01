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
                styles.genderBox,
                selectedGender === 'male' && styles.selectedGender,
              ]}
              onPress={() => handleGenderSelect('male')}
            >
              <Icon name="mars" size={30} color="blue" />
              <Text style={styles.genderText}>Male</Text>
            </TouchableOpacity>
            <View style={styles.gap} />
            <TouchableOpacity
              style={[
              styles.genderBox,
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
      borderRadius: 8,
      padding: 30,
      
    },
    gap: {
      width: 40, // Adjust the width to control the size of the gap
    },
    selectedGender: {
      borderColor: 'green', // Any styling for selected options
    },
    genderText: {
      fontSize: 16,
      marginTop: 5,
    },
  });