import Button from '../components/Button'
import { useNavigate, useLocation } from "react-router-dom";
import './styles/course.css'
import { useState, useEffect } from 'react';
import { auth } from '../utils/firebaseAuth';
import { useAuthState } from "react-firebase-hooks/auth";

export default function Course(){
    const navigate = useNavigate();
    const location = useLocation();
    const userData = location.state;
    console.log(userData);

    const [user, loading] = useAuthState(auth);
    const [pageLoading, setPageLoading] = useState(true);

    useEffect(() => {
        if (loading) return;
        if (!user) return navigate("/");
    }, [user, loading]);

    useEffect(() => {
        
            // Simulate a minimum display time of 1 second
            setTimeout(() => {
              setPageLoading(false);
            }, 1000); // Minimum display time of 1 second
          
    }, [])

    function openChapter(chapter){
        navigate(`/chapter/${chapter}`, {state : userData});
    }

    return(
        <>
            <div className='home_button_container'>
                <Button
                    title="🏠"
                    type="module_nav"
                    handleClick={() => {
                        navigate("/home", {state: userData });
                    }}
                    style="blue"
                />
            </div>
            <div>
                <Button title="rights" handleClick={() => {
                    console.log("clicked")
                    openChapter("rights");
                }}/>
            </div>
        </>
    )
}
