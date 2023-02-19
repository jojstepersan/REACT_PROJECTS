import logo from './logo.svg';
import './App.css';
import { ToDoCounter } from "./ToDoCounter";
import { ToDoItem } from "./ToDoItem";
import { CreateToDoButton } from './CreateToDoButton';
import { ToDoSearch } from './ToDoSearch';
import { ToDoList } from './ToDoList';
import React from 'react';

const toDos=[
  {text:'Cortar ceboolla',complete:false},
  {text:'Tomar el curso de intro a react',complete:false},
  {text:'llorar con la llorona',complete:false}
];

function App() {
  return (
    <React.Fragment>
      <ToDoCounter/>
      <ToDoSearch/>
      <input placeholder="Cebolla"/>
      <ToDoList>
        {
          toDos.map(toDo=>(
            <ToDoItem key={toDo.text} text={toDo.text}/>
          ))
        }
      </ToDoList>
      <CreateToDoButton/>
    </React.Fragment>
    
  );
}

export default App;
