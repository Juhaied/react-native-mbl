import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Second = ({ head, title, style }) => {
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
   
  },
  header: {
    textAlign: 'center',
    fontSize: 24,
    color: 'black', 
    
  },
  question: {
    marginLeft: 12,
    fontSize: 26,
    color: 'black', 
    marginTop: 10,
  
  },
});

export default Second;
