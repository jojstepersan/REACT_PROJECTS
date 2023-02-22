import react from "react";
import './ToDoSearch.css'

function ToDoSearch({searchValue,setSearchValue}){
    //const [searchValue,setSearchValue] = react.useState('');

    const onSearchValueChange = (event) => {
        console.log(event.target.value);
        setSearchValue(event.target.value);
    }
    return(
        <input 
            className="ToDoSearch" 
            placeholder="Cebolla" 
            onChange={onSearchValueChange}
        />
    );
}
export {ToDoSearch};