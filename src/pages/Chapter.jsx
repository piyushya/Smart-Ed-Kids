import './styles/chapter.css'
import MapModule from '../components/MapModule.jsx'
import { useNavigate, useLocation } from "react-router-dom";
import Loader from '../components/Loader';
import Button from '../components/Button';
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { auth } from '../utils/firebaseAuth';
import { useAuthState } from "react-firebase-hooks/auth";


export default function Chapter(){
    const {chapter} = useParams();
    const [user, loading] = useAuthState(auth);
    const [pageLoading, setPageLoading] = useState(true);
    const navigate = useNavigate();
    const location = useLocation()
    const userData = location.state;
    console.log(userData);
    
    useEffect(() => {
            // Simulate a minimum display time of 1 second
            setTimeout(() => {
              setPageLoading(false);
            }, 1000); // Minimum display time of 1 second
    }, [])

    return (
        <>
            {pageLoading && <Loader/>}
            <div className='home_button_container'>
                <Button
                    title="🏠"
                    type="module_nav"
                    handleClick={() => {
                        navigate("/course", {state: userData});
                    }}
                    style="blue"
                />
            </div>
            <div className={"map_container"} style={{
            backgroundImage : `url("${window.location.origin}/chapter_map.avif")`
            }}>
                <MapModule
                    chapter = {chapter}
                    id = {0}
                    status={"complete"}
                />
                <MapModule
                    chapter = {chapter}
                    id = {1}
                    status={"complete"}
                />
                <MapModule
                    chapter = {chapter}
                    id = {0}
                    status={"pending"}
                />
                <MapModule
                    chapter = {chapter}
                    id = {1}
                    status={"disabled"}
                />
                <MapModule
                    chapter = {chapter}
                    id = {0}
                    status={"disabled"}
                />
            </div>
        </>
    )
}
