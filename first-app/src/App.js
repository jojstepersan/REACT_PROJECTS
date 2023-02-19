import logo from './logo.svg';
import './App.css';
import { ToDoCounter } from "./ToDoCounter";
import { ToDoItem } from "./ToDoItem";
import { CreateToDoButton } from './CreateToDoButton';
import { ToDoSearch } from './ToDoSearch';
import { ToDoList } from './ToDoList';
import React from 'react';

const toDos=[
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el cursso de intro a React', completed: false },
  { text: 'Llorar con la llorona', completed: false },
  { text: 'LALALALAA', completed: false },
];

function App() {
  return (
    <React.Fragment>
      <ToDoCounter/>
      <ToDoSearch/>
      <ToDoList>
        {
          toDos.map(toDo=>(
            <ToDoItem 
              key={toDo.text} 
              text={toDo.text}
              completed={toDo.completed}/>
          ))
        }
      </ToDoList>
      <CreateToDoButton/>
    </React.Fragment>
    
  );
}

export default App;
