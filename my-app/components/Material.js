import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

const Material = () => {
  const [box1Selected, setBox1Selected] = useState(false);
  const [box2Selected, setBox2Selected] = useState(false);

  const handleBox1Press = () => {
    setBox1Selected(true);
    setBox2Selected(false);
  };

  const handleBox2Press = () => {
    setBox1Selected(false);
    setBox2Selected(true);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.box, box1Selected && styles.selectedBox]}
        onPress={handleBox1Press}
      >
        <Text style={styles.boxText}>No, I have them</Text>
      </TouchableOpacity>
      
      <View style={{ width: 1 }} />

      <TouchableOpacity
        style={[styles.box, box2Selected && styles.selectedBox]}
        onPress={handleBox2Press}
      >
        <Text style={styles.boxText}>Yes please</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  box: {
    width: 150, // Adjust the width as needed
    height: 50,
    backgroundColor: 'lightgray',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5, // Add border radius for rounded corners
  },
  selectedBox: {
    backgroundColor: '#00ffff', // Change this color as desired
  },
  boxText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black', // Text color
  },
});

export default Material;
