import react from "react";
import './ToDoSearch.css';
import {ToDoContext} from "../ToDoContext";

function ToDoSearch(){
    const {searchValue,setSearchValue}=react.useContext(ToDoContext)
    //const [searchValue,setSearchValue] = react.useState('');

    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    }
    return(
        <input 
            className="ToDoSearch" 
            placeholder="Cebolla" 
            value={searchValue}
            onChange={onSearchValueChange}
        />
    );
}
export {ToDoSearch};