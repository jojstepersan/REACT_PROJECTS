
import React from 'react';
import {AppUI} from './AppUI';

function useLocalStorage(itemName,initialValue){
  const [loading,setLoading]=React.useState(true);
  const [item, setItem] = React.useState(initialValue);
  const [error,setError] = React.useState(false)
  React.useEffect(()=>{
    setTimeout(()=>{
      try{
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
        setItem(parsedItem);
        setLoading(false);
      }catch(error){
        setError(error);
      }
      
    },1000);
  });

  //const [item,setItem] = React.useState(parsedItem);

  const saveItem = (newItem) =>{
    try{
      const stringifiedItem = JSON.stringify(newItem);
      // Los guardamos en el localStorage
      localStorage.setItem(itemName, stringifiedItem);
      // Actualizamos nuestro estado
      setItem(newItem);
    }catch(error){
      setError(error)
    }
     
  };
  return {
    item,
    saveItem,
    loading ,
    error
  }
}
function App() {
  const {
    item:toDos,
    saveItem:saveToDos,
    loading,
    error
  } = useLocalStorage("TODOS_V1",[]);
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
      loading={loading}
      error={error}
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

