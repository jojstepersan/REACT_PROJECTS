import React from "react";  

import './ToDoItem.css';



function ToDoItem(props){

    return(
        <li className="ToDoItem">
            <span 
                className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
                onClick={props.onCompleted}
            >
                √
            </span>
            <p className={`ToDoItem-p ${props.completed && 'ToDoItem-p--complete'}`}>
                {props.text}
                </p>
            <span 
                className="Icon Icon-delete"
                onClick={props.onDeleted}
            >
                X
            </span>
        </li>
    );
}
export {ToDoItem}