import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Second= ({head,title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{head}</Text>
      <Text style={styles.question}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
     // Change the background color as desired
  },
  header: {
    textAlign:'center',
    fontSize: 24,
    color: 'black', // Change the text color as desired
    fontWeight: 'bold',
  },
  question: {
    marginLeft:12,
    fontSize: 26,
    color: 'black', // Change the text color as desired
    marginTop: 10,
    fontWeight: 'bold',
  },
});

export default Second;
