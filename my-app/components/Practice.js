import {StyleSheet, Text, View, TouchableOpacity ,TextInput} from 'react-native';
import React from 'react';
export default function Practice(){
    return (
        <View style={styles.container}>
          <Text style={styles.title}>Contact Details</Text>
          <View style={styles.inputContainer}>
            <TextInput style={styles.input} placeholder="Building Name" placeholderTextColor="#999" />
            <TextInput style={styles.input} placeholder="Appartment No." placeholderTextColor="#999" />
            <TextInput style={styles.input} placeholder="State" placeholderTextColor="#999" />
            <TextInput style={styles.input} placeholder="Phone/E-mail" placeholderTextColor="#999" />
          </View>
          <View style={styles.container}>
            <Text style={styles.header}>Select Service</Text>
            <View style={styles.line} />
          </View>
        </View>
      );
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