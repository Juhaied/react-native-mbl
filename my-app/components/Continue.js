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
      width: 200, 
      height: 50, 
      marginLeft:100,
      backgroundColor: '#40e0d0', 
      borderRadius: 28, 
      alignItems: 'center',
      justifyContent: 'center',
      alignContent:'center'
    },
    text: {
      color: 'white', 
      fontSize: 18, 
      fontWeight: 'bold', 
      textAlign:'center',
    },
  });
  