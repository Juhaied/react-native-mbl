import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Prac = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  const renderOption = (option, backgroundColor) => {
    const isSelected = selectedOption === option;

    return (
      <TouchableOpacity
        style={[
          styles.option,
          isSelected && styles.selectedOption,
          { backgroundColor: backgroundColor },
        ]}
        onPress={() => handleOptionSelect(option)}
      >
        <View style={styles.optionTextContainer}>
          <Text style={styles.optionText}>{option}</Text>
          <View style={styles.radio}>
            {isSelected && <View style={styles.innerRadio} />}
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Select Service</Text>
      <View style={styles.line} />

      <View style={styles.optionContainer}>
        {renderOption('Office Cleaning', '#00ff00')}
        {renderOption('Home cleaning', '#00ffff')}
      </View>

      <View style={styles.optionContainer}>
        {renderOption('General cleaning', '#f0e68c')}
        {renderOption('Deep cleaning', '#ff7f50')}
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
  optionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  option: {
    width: '40%',
    height: 70,
    padding: 20,
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 8,
    alignItems: 'center',
    flexDirection: 'row',
  },
 
  optionTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionText: {
    fontSize: 16,
    flex: 1,
  },
  radio: {
    width: 12,
    height: 12,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
    backgroundColor:'white'
  },
  innerRadio: {
    width: 7, 
    height: 7, 
    borderRadius: 5, 
    backgroundColor: 'blue', // Color for the selected radio button
  },
});

export default Prac;
