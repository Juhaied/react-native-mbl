import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
export default function App() {
  
  const [people,setPeople] = useState([
    {name : 'Juhaied' , key : '1'},
    {name : 'Hossen' , key : '2'},
    {name : 'Nabid' , key : '3'},
    {name : 'Abid' , key : '4'},
    {name : 'Ador' , key : '5'},
    {name : 'Toufique' , key : '6'},
    {name : 'Rayhan' , key : '7'},
    {name : 'R' , key : '8'},
    {name : 'Kan' , key : '9'},
  ])
  
  return (
    <View style={styles.container}>
      <ScrollView>
        {people.map((item) =>{
          return(
          <Text style={styles.item} key={item.key}>{item.name}</Text>
        )
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop:40,
    paddingHorizontal:20,
    backgroundColor: 'white',
   // alignItems: 'center',
   // justifyContent: 'center',
  },
  item :{
    marginTop:24,
    padding:30,
    backgroundColor:'pink',
    fontSize:24,
  }
 
  
});
