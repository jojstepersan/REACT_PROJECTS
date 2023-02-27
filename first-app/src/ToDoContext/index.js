import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const ToDoContext = React.createContext();

function ToDoProvider(props){
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
    return(
        <ToDoProvider value={{
            loading,
            error,
            totalToDos,
            completedToDos,
            searchValue,
            setSearchValue,
            searchToDos,
            completeToDo,
            deleteToDo,
        }}>
            {props.children}
        </ToDoProvider>
    );
}
export {ToDoContext, ToDoProvider}
<ToDoContext.Consumer></ToDoContext.Consumer>