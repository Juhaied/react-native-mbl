
import { FlatList, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import Header from './components/Header';
export default function App() {

  const [todos,setTodos] = useState([
    {text: ' buy coffe' , key:'1'},
    {text: ' create an app' , key:'2'},
    {text: ' play coc' , key:'3'},
  ]);
  
  
  return (
    <View style={styles.container}>
      {/* Header */}
      <Header />
      <View style={styles.content}>

        {/* to do form */}
        <View style={styles.list}>
          <FlatList 
          data={todos}
          renderItem={({item}) =>(
            <Text>{item.text}</Text>
           )}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content : {
    padding:40,
  },
  list :{
    marginTop:20,
  },
 
  
});
