import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const Language = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  const languageOptions = [
    'English',
    'Spanish',
    'French',
    // Add more languages as needed
  ];

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
  };

  return (
    <View style={styles.container}>
      <View style={styles.rowContainer}>
        <Text style={styles.label}>Select Language:</Text>
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
      <Text style={styles.selectedLanguage}>Selected Language: {selectedLanguage}</Text>
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
    fontSize: 18,
    marginRight: 10,
  },
  picker: {
    width: '60%', // Adjust the width as needed
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
  },
  selectedLanguage: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Language;
