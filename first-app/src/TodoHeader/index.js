import React from 'react';

function TodoHeader({ children,loading
    /*totalTodos, 
    completedTodos,
    searchValue,
    setSearchValue*/
}){
    const cloneChildren=React.cloneElement(children,{loading})
    return (
        <header>
           {React.Children
                .toArray(children)
                .map(child => React.cloneElement(child, { loading }))}
        </header>
    );

}
export { TodoHeader };