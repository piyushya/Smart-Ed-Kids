import './styles/chapter.css'
import MapModule from '../components/MapModule.jsx'
import { useNavigate, useLocation } from "react-router-dom";
import Loader from '../components/Loader';
import Button from '../components/Button';
import VideoContainer from '../components/VideoContainer';
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

    document.querySelector("body").onscroll = function myFunction() {
        var scrolltotop = document.scrollingElement.scrollTop;
        var target = document.querySelector(".map_container");
        var xvalue = "center";
        var factor = -0.3;
        var yvalue = scrolltotop*factor;
        target.style.backgroundPosition = xvalue + " " + yvalue + "px";
    }

    const [videoUrl, setVideoUrl] = useState("");
    
    useEffect(() => { 
            // Simulate a minimum display time of 1 second
            setTimeout(() => {
              setPageLoading(false);
            }, 1000); // Minimum display time of 1 second
    }, [])

    function navigateModule(id){
        navigate(`/module/${id}`, {state : userData});
    }

    return (
        <>
            {pageLoading && <Loader/>}
            {videoUrl && <VideoContainer url={videoUrl} setVideoUrl={setVideoUrl}/>}
            <div className='home_button_container'>
                <Button
                    title="↩️"
                    type="module_nav"
                    handleClick={() => {
                        navigate("/course", {state: userData});
                    }}
                    style="button_blue"
                />
            </div>
            <div className={"map_container"} style={{
                backgroundImage : `url("${window.location.origin}/mod_back.png")`
            }}>
                <MapModule
                    chapter = {chapter}
                    id = {0}
                    status={"complete"}
                    navigateModule={navigateModule}
                    setVideoUrl={setVideoUrl}
                    language={userData.language}
                />
                <MapModule
                    chapter = {chapter}
                    id = {1}
                    status={"complete"}
                    navigateModule={navigateModule}
                />
                <MapModule
                    chapter = {chapter}
                    id = {2}
                    status={"complete"}
                    navigateModule={navigateModule}
                />
                <MapModule
                    chapter = {chapter}
                    id = {3}
                    status={"complete"}
                    navigateModule={navigateModule}
                    setVideoUrl={setVideoUrl}
                    language={userData.language}
                />
                <MapModule
                    chapter = {chapter}
                    id = {4}
                    status={"complete"}
                    navigateModule={navigateModule}
                />
                <MapModule
                    chapter = {chapter}
                    id = {5}
                    status={"complete"}
                    navigateModule={navigateModule}
                />
                <MapModule
                    chapter = {chapter}
                    id = {6}
                    status={"complete"}
                    navigateModule={navigateModule}
                />
                <MapModule
                    chapter = {chapter}
                    id = {7}
                    status={"complete"}
                    navigateModule={navigateModule}
                />
                <MapModule
                    chapter = {chapter}
                    id = {8}
                    status={"complete"}
                    navigateModule={navigateModule}
                />
                <MapModule
                    chapter = {chapter}
                    id = {9}
                    status={"complete"}
                    navigateModule={navigateModule}
                />
                <MapModule
                    chapter = {chapter}
                    id = {10}
                    status={"disabled"}
                    navigateModule={navigateModule}
                />
                <MapModule
                    chapter = {chapter}
                    id = {11}
                    status={"disabled"}
                    navigateModule={navigateModule}
                />
                <MapModule
                    chapter = {chapter}
                    id = {12}
                    status={"disabled"}
                    navigateModule={navigateModule}
                />
                <MapModule
                    chapter = {chapter}
                    id = {13}
                    status={"disabled"}
                    navigateModule={navigateModule}
                />
                <MapModule
                    chapter = {chapter}
                    id = {14}
                    status={"disabled"}
                    navigateModule={navigateModule}
                />
            </div>
        </>
    )
}
