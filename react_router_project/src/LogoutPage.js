import React from "react";
import { useAuth } from "./auth";

const LogoutPage = () =>{
    const auth= useAuth();
    const logout = (e)=>{
        e.preventDefault();
        console.log("logout")
        auth.logout();
    }
    return(
        <>
            <div>Logout page</div>
            <form onSubmit={logout}>
                <label>Esta seguro de que quiere salir?</label>
                <button type="submit">salir</button>
            </form>
        </>
        
    )
}

export default LogoutPage;