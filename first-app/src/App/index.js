
import React from 'react';
import {AppUI} from './AppUI';

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
    <AppUI
      totalToDos={totalToDos}
      completedToDos={completedToDos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchToDos={searchToDos}
      completeToDo={completeToDo}
      deleteToDo={deleteToDo}
    />
    )
}

export default App;

