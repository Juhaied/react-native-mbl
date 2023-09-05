
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
import Person from './components/Person';
import Language from './components/Language';
import Material from './components/Material';
import Pricing from './components/Pricing';
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
        <Practice2 />
        <OptionComponent />
        <Select />
        <Continue />
        {/* 
        <Second head="Select Hour" title="How many hours do you need?" />
        <SevenBoxes />
        <View style={{ marginTop: -30 }}>
          <Second title="How many person do you need?" />
          <Person />
        </View>
        <View style={{ marginTop: -30 }}>
          <Second title="Select cleaner language" />
          <Language />
        </View>
        <View style={{ marginTop: -50 }}>
          <Second title="Need Cleaning materials?" style={{ fontSize: 14 }} />
        </View>
        
        <View style={{ marginBottom: 30 }}>
          <Material />   
        </View>
        
        <View style={{ marginBottom: 80 }}>
          <Pricing price={150} />   
        </View>
        
        <Continue />    
        */}
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
