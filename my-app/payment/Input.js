import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const Input = () => {
  const [accountName, setAccountName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [additionalInput, setAdditionalInput] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Account Name</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setAccountName(text)}
        value={accountName}
        underlineColorAndroid="transparent" // Remove underline on Android
      />

      <Text style={styles.label}>Card Number</Text>
      <TextInput
        style={styles.input}
        onChangeText={(text) => setCardNumber(text)}
        value={cardNumber}
        underlineColorAndroid="transparent" // Remove underline on Android
        placeholder='0000 0000 0000 0000'
      />

      <View style={styles.horizontalContainer}>
        <View style={styles.horizontalInputContainer}>
          <Text style={styles.label}>Expiry:</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setExpiry(text)}
            value={expiry}
            underlineColorAndroid="transparent" // Remove underline on Android
            placeholder='MM/DD'
          />
        </View>

        <View style={styles.horizontalInputContainer}>
          <Text style={styles.label}>CVV</Text>
          <TextInput
            style={styles.input}
            onChangeText={(text) => setAdditionalInput(text)}
            value={additionalInput}
            underlineColorAndroid="transparent" // Remove underline on Android
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  input: {
    fontSize: 16,
    borderBottomColor: '#ccc', // Border color for the line
    borderBottomWidth: 1, // Border width for the line
    paddingVertical: 4, // Adjust the padding as needed
    marginBottom: 16,
  },
  horizontalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  horizontalInputContainer: {
    flex: 1,
    marginRight: 8,
  },
});

export default Input;
