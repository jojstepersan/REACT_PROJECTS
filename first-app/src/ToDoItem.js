import React from "react";  

import './ToDoItem.css';



function ToDoItem(props){
    
    const onCompleted = () => {
        alert('Ya completaste el ToDo '+props.text);
    };

    
    const onDeleted = () => {
        alert('Borraste el ToDo '+props.text);
    };
    return(
        <li className="ToDoItem">
            <span 
                className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
                onClick={onCompleted}
            >
                √
            </span>
            <p className={`ToDoItem-p ${props.completed && 'ToDoItem-p--complete'}`}>
                {props.text}
                </p>
            <span 
                className="Icon Icon-delete"
                onClick={onDeleted}
            >
                X
            </span>
        </li>
    );
}
export {ToDoItem}