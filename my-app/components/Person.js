import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Person = () => {
  const [selectedBox, setSelectedBox] = useState(null);

  const handleBoxPress = (boxNumber) => {
    setSelectedBox(boxNumber);
  };

  const isBoxSelected = (boxNumber) => {
    return selectedBox === boxNumber;
  };

  const renderBox = (boxNumber) => {
    if (boxNumber <= 4) {
      const boxBackgroundColor = isBoxSelected(boxNumber) ? '#00ffff' : '#f8f8ff';

      return (
        <View style={styles.boxContainer} key={boxNumber}>
          <TouchableOpacity
            style={[styles.box, { backgroundColor: boxBackgroundColor }]}
            onPress={() => handleBoxPress(boxNumber)}
          >
            <Text style={styles.boxText}>{boxNumber}</Text>
          </TouchableOpacity>
        </View>
      );
    }
    return null; // Don't render boxes beyond the first 4
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {renderBox(1)}
        {renderBox(2)}
        {renderBox(3)}
        {renderBox(4)}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column', // Align rows in a column
    alignItems: 'center', // Center rows horizontally
  },
  row: {
    flexDirection: 'row', // Align boxes in a row
    justifyContent: 'center', // Center the boxes horizontally
    alignItems: 'center', // Center the boxes vertically (adjust as needed)
  },
  boxContainer: {
    margin: 5, // Add some margin between the boxes (adjust as needed)
  },
  box: {
    width: 50, // Set the width of each box (adjust as needed)
    height: 50, // Set the height of each box (adjust as needed)
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:10,
    marginLeft:30,
  },
  boxText: {
    color: 'black', // Text color
    fontSize: 28, // Text size (adjust as needed)
    fontWeight:'bold',
  },
  boxDescription: {
    marginTop: 5, // Add some margin between the box and the description
    fontSize: 12, // Adjust the description text size as needed
  },
});

export default Person;
