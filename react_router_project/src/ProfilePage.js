import React from "react";
import { useAuth } from "./auth";
const ProfilePage = () =>{

    const auth = useAuth();

    debugger;
    return(
        <>
            <h1>Profile page</h1>
            <p>welcome {auth.user.username}</p>
        </>
        
    )
}

export default ProfilePage;