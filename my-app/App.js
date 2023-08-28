import { StatusBar } from 'expo-status-bar';
import { TextInput, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
export default function App() {
  

  const [name,setName] =useState('Juhaied');
  const [age,setAge] = useState(23);
  
  return (
    <View style={styles.container}>
      <Text>Enter Name:</Text>
      <TextInput 
      //multiline       --> it is used for multiline inputs Ex: like i want to describe a product
      style={styles.input}
      placeholder='e.g. Nabid'
      onChangeText={(val) => setName(val)} />

      <Text>Enter Age:</Text>
      <TextInput 
      keyboardType='numeric'
      style={styles.input}
      placeholder='e.g. 12'
      onChangeText={(val) => setAge(val)} />

      <Text>Name is {name} and age is {age}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input :{
    borderWidth:1,
    borderColor: 'red',
    padding:8,
    margin:10,
    width:200,
  }
  
});
