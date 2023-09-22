import Button from '../components/Button'
import { useNavigate } from "react-router-dom";
import './styles/course.css'
import { useState, useEffect } from 'react';
import { logout, auth } from '../utils/firebaseAuth';
import { useAuthState } from "react-firebase-hooks/auth";

export default function Course(){
    const navigate = useNavigate();
    const [user, loading] = useAuthState(auth);

    useEffect(() => {
        if (loading) return;
        if (!user) return navigate("/");
    }, [user, loading]);

    function openChapter(chapter){
        navigate(`/chapter/${chapter}`);
    }

    function handleLogout(){
        logout();
        console.log("logout succesful")
    }

    return(
        <div>
            <div className="chapter_container" onClick={() => {openChapter("rights")}}>
            </div>
            <Button type="nav_button" title='log out' handleClick={handleLogout}/>
        </div>
    )
}