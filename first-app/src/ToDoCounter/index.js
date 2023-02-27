import React from "react";
import './ToDoCounter.css';
import {ToDoContext} from "../ToDoContext"
function ToDoCounter(){
    
    const {totalToDos, completedToDos}= React.useContext(ToDoContext)
    return(
         <h2 className="ToDoCounter">Has completado {completedToDos} de {totalToDos}</h2>
    );

}

//export default ToDoCounter;
export  {ToDoCounter};