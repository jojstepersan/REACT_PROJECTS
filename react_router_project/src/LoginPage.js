import React from "react";
import { useAuth } from "./auth";

const LoginPage = () =>{
    const auth = useAuth();

    const[username, setUsuario]=React.useState('');

    const login = (e) => {
        e.preventDefault();
        console.log(username);
        auth.login({username});        
    }

    return(
        <>
            <div>Login page</div>
            <form onSubmit={login}>
                <label>usuario</label>
                <input value={username} onChange={(e)=>setUsuario(e.target.value)}/>
                <button type="submit">login</button>
            </form>
        </>
        
    )
}

export default LoginPage;