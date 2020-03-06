import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/header';
import ToDoItem from './components/todoitem';
import AddToDo from './components/addtodo';
import Sandbox from './components/sanbox';

export default function App() {
  const [todos,setTodos]=useState([
    {text:'Play game', id :'1'},
    {text:'Read book',id:'2'},
    {text:'Cooking',id:'3'}
  ]);


const pressHandler=(id) =>{
  setTodos((prevTodos)=>
  {return prevTodos.filter(todo =>todo.id != id);
  })
}
const submitHandler=(text) =>{
  if(text.length > 3){
    setTodos((prevTodos)=> {
      return[
        {text:text,id:Math.random().toString()},
        ...prevTodos
      ];
    });
  }else{
    Alert.alert('OOPS','Todos must be over 3 chars long',[
      {text:'Cancel',onPress:()=> console.log('alert closed')}
    ]);
  }
  
}

  return (
   // <Sandbox />
    <TouchableWithoutFeedback onPress={()=>{
      Keyboard.dismiss();
      console.log('dismisskeyboard');
    }}>
    <View style={styles.container}>
      <Header/>
      <View style={styles.content}>
        <AddToDo submitHandler={submitHandler} />
        <View style={styles.list}>
        <FlatList
        data={todos}
        renderItem={({item})=>
          <ToDoItem item={item} pressHandler={pressHandler} />
        }
        />
        </View>
      </View>
  
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content:{
    padding:40,
    flex:1
  },
  list:{
    flex:1,
    marginTop:20,

  }
});
