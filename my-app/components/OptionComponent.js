import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const OptionComponent = () => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Select Service</Text>
      <View style={styles.line} />

      <View style={styles.optionContainer}>
        <TouchableOpacity
          style={[
            styles.option,
            selectedOption === 'option1' && styles.selectedOption,
          ]}
          onPress={() => handleOptionSelect('option1')}
        >
          <Text style={styles.optionText}>Option 1</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.option,
            selectedOption === 'option2' && styles.selectedOption,
          ]}
          onPress={() => handleOptionSelect('option2')}
        >
          <Text style={styles.optionText}>Option 2</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.optionContainer}>
        <TouchableOpacity
          style={[
            styles.option,
            selectedOption === 'option3' && styles.selectedOption,
          ]}
          onPress={() => handleOptionSelect('option3')}
        >
          <Text style={styles.optionText}>Option 3</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.option,
            selectedOption === 'option4' && styles.selectedOption,
          ]}
          onPress={() => handleOptionSelect('option4')}
        >
          <Text style={styles.optionText}>Option 4</Text>
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
  optionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  option: {
    width: '40%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    alignItems: 'center',
  },
  selectedOption: {
    backgroundColor: '#f0f0f0',
  },
  optionText: {
    fontSize: 16,
  },
});

export default OptionComponent;
