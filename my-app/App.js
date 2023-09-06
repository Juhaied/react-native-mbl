
import { FlatList, StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { useState } from 'react';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import AddTodo from './components/AddTodo';
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
import Prac from './components/Prac';
import PaymentOption from './payment/PaymentOption';
import Input from './payment/Input';
import Confirm from './payment/Confirm';
export default function App() {


 
  
  return (
    <ScrollView>
      <View style={styles.container}>
      <PaymentOption
        option={{
          cardType: 'Visa',
          cardNumber: 'X X X X  X X X X  X X X X  X X X X',
          expiry: '12/24',
        }}
        onPress={() => {
          // Handle payment option selection
        }}
      />

      <Input />
      <Confirm />
      

        {/* 
        <Practice2 />
        <Prac />
        <Select />
        <Continue />
        */}
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
