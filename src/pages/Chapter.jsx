import './styles/chapter.css'
import MapModule from '../components/MapModule.jsx'
import Loader from '../components/Loader';
import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";


export default function Chapter(){
    const {chapter} = useParams();
    const [pageLoading, setPageLoading] = useState(true);

    // window.onload = () => {
    //     setPageLoading(false);
    // };
    
    useEffect(() => {
        console.log("loading..")
        setPageLoading(true); // Show loading screen
        const handleLoad = () => {
            console.log("done loading")
            setPageLoading(false); // Remove loading screen
        };
        // Listen to the "load" event on the window to detect when the page is fully loaded
        window.addEventListener('load', handleLoad);
        return () => {
            // Clean up the event listener when the component is unmounted
            window.removeEventListener('load', handleLoad);
        };
    }, []);

    return (
        <div>
            {pageLoading && <Loader/>}
            <div className={`map_container ${pageLoading && "page_loading"}`} style={{
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
        </div>
    )
}