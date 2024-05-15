import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "./auth";
const Menu = () => {
    const auth =  useAuth();

    return (
        <nav>
            <lu>
                {routes.map(r => {

                    if(r.publicOnly && auth.user) return null;
                    if(r.private && !auth.user) return null;
                    
                    return(
                        <li key={r.to}>
                            <NavLink 
                            to={r.to}
                            style={({isActive}) =>({
                                color: isActive?"red":"blue"
                            })}> 
                                {r.text}
                            </NavLink>
                        </li>)                    
                })}                                  
            </lu>
        </nav>
    )
}
const routes = [];
routes.push({
    to:"/",
    text:"Home",
    private:false
})
routes.push({
    to:"/blog",
    text:"Blog"
})
routes.push({
    to:"/Profile",
    text:"Profile",
    private:true
})

routes.push({
    to:"/Login",
    text:"Login",
    private:false,
    publicOnly:true
})

routes.push({
    to:"/Logout",
    text:"Logout",
    private:true
})
export default Menu;