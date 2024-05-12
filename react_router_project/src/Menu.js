import React from "react";
import { NavLink } from "react-router-dom";
const Menu = ()=>{
    return (
        <nav>
            <lu>
                {routes.map(r => (
                    <li>
                        <NavLink 
                        to={r.to}
                        style={({isActive}) =>({
                            color: isActive?"red":"blue"
                        })}> 
                            {r.text}
                        </NavLink>
                    </li>                    
                ))}                                  
            </lu>
        </nav>
    )
}
const routes = [];
routes.push({
    to:"/",
    text:"Home"
})
routes.push({
    to:"/blog",
    text:"Blog"
})
routes.push({
    to:"/Profile",
    text:"Profile"
})
export default Menu;