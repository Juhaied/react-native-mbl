import React, { useState } from 'react';
import { View, Text} from 'react-native';
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
    <View>
      <Text>Select Language:</Text>
      <Picker
        selectedValue={selectedLanguage}
        onValueChange={(itemValue) => handleLanguageChange(itemValue)}
      >
        {languageOptions.map((language, index) => (
          <Picker.Item key={index} label={language} value={language} />
        ))}
      </Picker>
      <Text>Selected Language: {selectedLanguage}</Text>
    </View>
  );
};

export default Language;
