import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const SevenBoxes = () => {
  const [selectedBox, setSelectedBox] = useState(null);

  const handleBoxPress = (boxNumber) => {
    setSelectedBox(boxNumber);
  };

  const isBoxSelected = (boxNumber) => {
    return selectedBox === boxNumber;
  };

  const renderBox = (boxNumber) => {
    const boxBackgroundColor = isBoxSelected(boxNumber) ? '#00ffff' : '#f8f8ff';

    return (
      <View>
        
        <TouchableOpacity
          key={boxNumber}
          style={[styles.box, { backgroundColor: boxBackgroundColor }]}
          onPress={() => handleBoxPress(boxNumber)}
        >
          <Text style={styles.boxText}>{boxNumber}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {renderBox(1)}
      {renderBox(2)}
      {renderBox(3)}
      {renderBox(4)}
      {renderBox(5)}
      {renderBox(6)}
      {renderBox(7)}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row', // Align boxes in a row
    justifyContent: 'center', // Center the boxes horizontally
    alignItems: 'center', // Center the boxes vertically (adjust as needed)
  },
  box: {
    width: 50, // Set the width of each box (adjust as needed)
    height: 50, // Set the height of each box (adjust as needed)
    margin: 5, // Add some margin between the boxes (adjust as needed)
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:10,
  },
  boxText: {
    color: 'black', // Text color
    fontSize: 28, // Text size (adjust as needed)
    fontWeight:'bold',
  },
});

export default SevenBoxes;
