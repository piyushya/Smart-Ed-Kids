import { useNavigate } from "react-router-dom";
import './styles/ModuleCard.css'

export default function ModuleCard({name, id, image, points}){
    const navigate = useNavigate();

    function showModule(name){
        console.log("routing functionality for" + name);
        navigate(`/module/${id}`);
    }

    return(
        <div onClick={() => {showModule(name)}} className='module_card'>
            <div className='module_index'>
                {id}
            </div>
            <img src={`${window.location.origin}/module_education_rights/`+image} alt="image"></img>
            <div className='module_name module_info_cont'>{name}</div>
            <div className='module_points module_info_cont'>{points} {" Points"}</div>
        </div>
    )
}