import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Pricing = ({ price }) => {
  const pricingText = "Pricing       :";

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.priceText}>{pricingText}</Text>
        <Text style={styles.priceValue}>{price}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 20,
  },
  box: {
    flexDirection: 'row', // Display children in a row
    alignItems: 'center', // Center children vertically
    width: 200, // Adjust the width as needed
    padding: 10,
    backgroundColor: '#F5F5F5', // Background color of the box
    borderRadius: 8,
    justifyContent: 'space-between', // Space between children
  },
  priceText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black', // Text color for pricing text
  },
  priceValue: {
    marginRight:30,
    fontSize: 24,
    color: 'black', // Text color for price value
  },
  
});

export default Pricing;
