
import { FlatList, StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { useState } from 'react';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';
import Practice from './components/Practice';
import HeaderComponent from './components/HeaderComponent';
import OptionComponent from './components/OptionComponent';
import Select from './components/Select';
import Practice2 from './components/Practice2';
import Continue from './components/Continue';
import SevenBoxes from './components/SevenBoxes';
import Second from './components/Second';
export default function App() {

  const [todos,setTodos] = useState([
    {text: ' buy coffe' , key:'1'},
    {text: ' create an app' , key:'2'},
    {text: ' play coc' , key:'3'},
  ]);

  const pressHandler = (key) =>{
    setTodos((prevTodos) =>{
      return prevTodos.filter(todo =>todo.key != key)
    })
  }

  const submitHandler = (text) =>{
    setTodos((prevTodos)=>{
      return[
        {text:text, key : Math.random().toString()},
        ...prevTodos
      ]
    })
  }
  
  
  return (
    <ScrollView>
      <View style={styles.container}>
        <Second />
        <SevenBoxes />
      </View>
    </ScrollView>
   
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
