import React from 'react';
import './App.css';
import { ToDoCounter } from "../ToDoCounter";
import { ToDoItem } from "../ToDoItem";
import { CreateToDoButton } from '../CreateToDoButton';
import { ToDoSearch } from '../ToDoSearch';
import { ToDoList } from '../ToDoList';
import {ToDoContext} from '../ToDoContext'       

function AppUI(){

    var value = React.useContext(ToDoContext);
    return (
        <React.Fragment>
          <ToDoCounter/>
          <ToDoSearch/>
            <ToDoList>
                {loading && <p>Estamos cargando, no desesperes...</p>}
                {error && <p>HUbo un Error...</p>}
                {!loading && !searchToDos.length && <p>Crea tu primer To Do</p>}
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