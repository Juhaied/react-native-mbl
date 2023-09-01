import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Select(){
    return(
        <View style={styles.container}>
          <Text style={styles.title}>Select Gender</Text>          
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 20,
    },
    inputContainer: {
      width: '80%',
    },
    input: {
      borderWidth: 1,
      borderColor: '#ccc',
      borderRadius: 8,
      padding: 10,
      marginBottom: 10,
      textAlign: 'right', // Align text to the right
    },
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