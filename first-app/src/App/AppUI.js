import React from 'react';
import './App.css';
import { ToDoCounter } from "../ToDoCounter";
import { ToDoItem } from "../ToDoItem";
import { CreateToDoButton } from '../CreateToDoButton';
import { ToDoSearch } from '../ToDoSearch';
import { ToDoList } from '../ToDoList';

function AppUI({
    totalToDos,
    completedToDos,
    searchValue,
    setSearchValue,
    searchToDos,
    completeToDo,
    deleteToDo
  }){
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
export {AppUI};