import { StyleSheet, Text, View, TextInput } from 'react-native';
import React, { useState } from 'react';
export default function Continue(){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>Continue</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex:1,
      width: 200, // Adjust the width as needed
      height: 50, // Adjust the height as needed
      marginLeft:100,
      backgroundColor: '#40e0d0', // Background color
      borderRadius: 28, // Rounded corners
      alignItems: 'center',
      justifyContent: 'center',
      alignContent:'center'
    },
    text: {
      color: 'white', // Text color
      fontSize: 18, // Text size
      fontWeight: 'bold', // Text weight
      textAlign:'center',
    },
  });
  