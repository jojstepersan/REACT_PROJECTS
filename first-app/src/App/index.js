
import React from 'react';
import {AppUI} from './AppUI';

const defaultToDos=[
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el cursso de intro a React', completed: false },
  { text: 'Llorar con la llorona', completed: false },
  { text: 'LALALALAA', completed: false },
];

function App() {
  const localStorageToDos = localStorage.getItem('TODOS_V1');
  let parsedToDos;
  if (!localStorageToDos) {
    // Si el usuario es nuevo no existe un item en localStorage, por lo tanto guardamos uno con un array vacío
    localStorage.setItem('TODOS_V1', JSON.stringify([]));
    parsedToDos = [];
  } else {
    // Si existen TODOs en el localStorage los regresamos como nuestros todos
    parsedToDos = JSON.parse(localStorageToDos);
  }

  const [toDos,setToDos] = React.useState(parsedToDos);
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

  const saveToDos = (newToDos) =>{
    const stringifiedToDos = JSON.stringify(newToDos);
    // Los guardamos en el localStorage
    localStorage.setItem('TODOS_V1', stringifiedToDos);
    // Actualizamos nuestro estado
    setToDos(newToDos); 
  }

  const completeToDo=(text) =>{
    const toDoIndex = toDos.findIndex(toDo => toDo.text === text);
    const newToDos=[...toDos];//copia de toDos como clon
    newToDos[toDoIndex].completed = true;
    saveToDos(newToDos);
  }

  const deleteToDo=(text) =>{
    const toDoIndex = toDos.findIndex(toDo => toDo.text === text);
    const newToDos=[...toDos];//copia de toDos como clon
    newToDos.splice(toDoIndex,1);
    saveToDos(newToDos);
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

