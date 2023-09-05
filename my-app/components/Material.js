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
        style={[styles.box, box1Selected ? styles.selectedBox : styles.unselectedBox]}
        onPress={handleBox1Press}
      >
        <Text style={styles.boxText}>No, I have them</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.box, box2Selected ? styles.selectedBox : styles.unselectedBox]}
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
    flex: 1, // Use flex to distribute available space evenly
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginLeft: 20, 
    marginRight: 20, 
  },
  selectedBox: {
    backgroundColor: '#40e0d0',
  },
  unselectedBox: {
    backgroundColor: '#f8f8ff',
  },
  boxText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default Material;
