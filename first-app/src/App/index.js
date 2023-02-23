
import React from 'react';
import {AppUI} from './AppUI';

function useLocalStorage(itemName,initialValue){
  const localStorageItem = localStorage.getItem(itemName);
  let parsedItem;
  if (!localStorageItem) {
    // Si el usuario es nuevo no existe un item en localStorage, por lo tanto guardamos uno con un array vacío
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  } else {
    // Si existen TODOs en el localStorage los regresamos como nuestros todos
    parsedItem = JSON.parse(localStorageItem);
  }

  const [item,setItem] = React.useState(parsedItem);

  const saveItem = (newItem) =>{
    const stringifiedItem = JSON.stringify(newItem);
    // Los guardamos en el localStorage
    localStorage.setItem(itemName, stringifiedItem);
    // Actualizamos nuestro estado
    setItem(newItem); 
  };
  return [
    item,
    saveItem 
  ]
}
function App() {
  const [toDos,saveToDos]=useLocalStorage("TODOS_V1",[]);
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

