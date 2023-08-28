import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
export default function App() {
  

  const [name,setName] =useState('Juhaied');
  const [person,setPerson] = useState({name : 'Juhaied Hossen',age:24});
  const clickHandler = () =>{
    setName('Nabid');
  }
  return (
    <View style={styles.container}>
      <Text>My Name is {name}</Text>
      <Text>His name is {person.name} and he is {person.age} years old</Text>
      <View style={styles.buttonContainer}>
        <Button title='Update Name' onPress={clickHandler}/>
      </View>
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
  header:{
    backgroundColor :'pink',
    padding : 20,
  },
  boldText:{
    fontWeight: 'bold',
  },
  body:{
    backgroundColor:'yellow',
    padding:20,
  },
  buttonContainer :{
    marginTop:30,
    backgroundColor:'black'
  }
  
});
