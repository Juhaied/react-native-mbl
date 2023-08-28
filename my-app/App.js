import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useState } from 'react';
export default function App() {
  
  const [people,setPeople] = useState([
    {name : 'Juhaied' , id : '1'},
    {name : 'Hossen' , id : '2'},
    {name : 'Nabid' , id : '3'},
    {name : 'Abid' , id : '4'},
    {name : 'Ador' , id : '5'},
    {name : 'Toufique' , id : '6'},
    {name : 'Rayhan' , id : '7'},
    {name : 'R' , id : '8'},
    {name : 'Kan' , id : '9'},
  ])

  const pressHandler = (id)=>{
    setPeople((prevPeople) =>{
    return prevPeople.filter(person =>person.id != id)})
  }
  
  return (
    <View style={styles.container}>

      <FlatList
        numColumns={1}
        keyExtractor={(item)=>item.id}
        data={people}
        renderItem={({item}) =>(
          <TouchableOpacity onPress={()=>pressHandler(item.id)}>
             <Text style={styles.item}>{item.name}</Text>
          </TouchableOpacity>
         
        )}
      />
      {/*
      <ScrollView>
        {people.map((item) =>{
          return(
          <Text style={styles.item} key={item.key}>{item.name}</Text>
        )
        })}
      </ScrollView>
      */}
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
    marginHorizontal:10,
    marginTop:34,
  }
 
  
});
