import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HeaderComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Select Service</Text>
      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
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
});

export default HeaderComponent;
