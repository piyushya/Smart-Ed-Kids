import { useNavigate } from "react-router-dom";
import course from '../data/course.json'
import './styles/MapModule.css'

export default function MapModule({chapter, id, status="disabled"}){
    const navigate = useNavigate();
    // console.log(course['chapters'][chapter])
    const module = course['chapters']['modules'][id];
    const title = module.title;
    const moduleType = module.type;
    const back_image_url = `${window.location.origin}/chapters/${module.chapter}/${title}/${module.image}`;
    const align = ((id%2 === 0) ? "left" : "right");

    let starIcon = `${window.location.origin}/`;
    starIcon += (status === "complete" ? "filled_star.png" : "empty_star.png");

    let playImgUrl = `${window.location.origin}/`;
    if(moduleType === "quiz")
        playImgUrl += "quiz.png";
    else if(moduleType === "video")
        playImgUrl += "video.png";
    else
        playImgUrl += "game.png";

    function showModule(name){
        console.log("routing functionality for" + name);
        navigate(`/module/${id}`);
    }

    return(
        <div onClick={() => {
                if(status !== "disabled")
                    showModule(title)
                else
                    // show messaage to complete previous modules
                console.log("complete previous modules");
            }} 
            className={`module_path module_path_${align} module_path_${status}`}>
            <div className={`module_container module_container_${align} ${status} module_container_${status}`} 
            style={{
                backgroundImage : `url("${back_image_url}")`
            }}>
                <img className='star' src={starIcon}></img>
                <p className='moduleName'>
                    {title}
                </p>
                <img className='module_type' src={playImgUrl}></img>
            </div>
        </div>
    )
}