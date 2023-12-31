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
            { backgroundColor: '#00ff00' }, // Color for option 1
          ]}
          onPress={() => handleOptionSelect('option1')}
        >
          <Text style={styles.optionText}>Office Cleaning</Text>
        </TouchableOpacity>
        <View style={{ width: 20 }} />

        <TouchableOpacity
          style={[
            styles.option,
            selectedOption === 'option2' && styles.selectedOption,
            { backgroundColor: '#00ffff' }, // Color for option 2
          ]}
          onPress={() => handleOptionSelect('option2')}
        >
          <Text style={styles.optionText}>Home cleaning</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.optionContainer}>
        <TouchableOpacity
          style={[
            styles.option,
            selectedOption === 'option3' && styles.selectedOption,
            { backgroundColor: '#f0e68c' }, // Color for option 3
          ]}
          onPress={() => handleOptionSelect('option3')}
        >
          <Text style={styles.optionText}>General cleaning</Text>
        </TouchableOpacity>
        <View style={{ width: 20 }} />

        <TouchableOpacity
          style={[
            styles.option,
            selectedOption === 'option4' && styles.selectedOption,
            { backgroundColor: '#ff7f50' }, // Color for option 4
          ]}
          onPress={() => handleOptionSelect('option4')}
        >
          <Text style={styles.optionText}>Deep cleaning</Text>
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
    textAlign:'center',
    width: '40%',
    height:70,
    padding: 20,
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 8,
    alignItems: 'center',
  },
  selectedOption: {
    // Any styling for selected options
  },
  optionText: {
    fontSize: 16,
  },
});

export default OptionComponent;
