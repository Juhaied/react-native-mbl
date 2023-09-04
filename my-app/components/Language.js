import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const Language = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  const languageOptions = [
    'English',
    'Arabic',
    'Hindi',
  ];

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <Text style={styles.label}>Language</Text>
        <Picker
          style={styles.picker}
          selectedValue={selectedLanguage}
          onValueChange={(itemValue) => handleLanguageChange(itemValue)}
        >
          {languageOptions.map((language, index) => (
            <Picker.Item key={index} label={language} value={language} />
          ))}
        </Picker>
      </View>
      {/* Add a line at the bottom */}
      <View style={styles.bottomLine} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    fontSize: 22,
    marginRight: -10,
  },
  picker: {
    width: '60%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginLeft: 40,
  },
  selectedLanguage: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: 'bold',
  },
  bottomLine: {
    borderBottomWidth: 1,
    borderColor: 'gray', // You can change the color as needed
    width: '90%', // Adjust the width as needed
    marginBottom: 20, // Adjust the margin as needed
  },
});

export default Language;
