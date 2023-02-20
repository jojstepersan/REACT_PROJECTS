import logo from './logo.svg';
import './App.css';
import { ToDoCounter } from "./ToDoCounter";
import { ToDoItem } from "./ToDoItem";
import { CreateToDoButton } from './CreateToDoButton';
import { ToDoSearch } from './ToDoSearch';
import { ToDoList } from './ToDoList';
import React from 'react';

const defaultToDos=[
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el cursso de intro a React', completed: false },
  { text: 'Llorar con la llorona', completed: false },
  { text: 'LALALALAA', completed: false },
];

function App() {
  const [toDos,setToDos] = React.useState(defaultToDos);
  const [searchValue,setSearchValue] = React.useState('');
  const completedToDos = toDos.filter(toDo => toDo.completed).length;
  const totalToDos = toDos.length;
  let searchToDos=[];

  if(!searchValue.length >= 1){
    searchToDos = toDos;
  } else{
    searchToDos = toDos.filter(toDo => {
      const toDoText = toDo.text.toLocaleLowerCase();
      const searchText = searchValue.toLocaleLowerCase();
      return toDoText.includes(searchText);
    });    
  }

  const completeToDo=(text) =>{
    const toDoIndex = toDos.findIndex(toDo => toDo.text === text);
    const newToDos=[...toDos];//copia de toDos como clon
    newToDos[toDoIndex].completed = true;
    setToDos(newToDos);
  }

  const deleteToDo=(text) =>{
    const toDoIndex = toDos.findIndex(toDo => toDo.text === text);
    const newToDos=[...toDos];//copia de toDos como clon
    newToDos.splice(toDoIndex,1);
    setToDos(newToDos);
  }
  return (
    <React.Fragment>
      <ToDoCounter
        total={totalToDos}
        completed={completedToDos}
      />
      <ToDoSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />
      <ToDoList>
        {
          searchToDos.map(toDo=>(
            <ToDoItem 
              key={toDo.text} 
              text={toDo.text}
              completed={toDo.completed}
              onCompleted={()=>completeToDo(toDo.text)}
              onDeleted={()=>deleteToDo(toDo.text)}
              />
          ))
        }
      </ToDoList>
      <CreateToDoButton/>
    </React.Fragment>
    
  );
}

export default App;

