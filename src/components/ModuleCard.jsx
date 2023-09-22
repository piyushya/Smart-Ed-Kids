import { useNavigate } from "react-router-dom";
// import './styles/ModuleCard.css'

export default function ModuleCard({name, id, frontImage,backImage, points}){
    const navigate = useNavigate();

    function showModule(name){
        console.log("routing functionality for" + name);
        navigate(`/module/${id}`);
    }

    const bgurl = `${window.location.origin}/module_education_rights/${backImage}`;

    return(
        <div onClick={() => {showModule(name)}} className='module_card'>
            <img className="module_back_image" 
                src={`${window.location.origin}/module_education_rights/`+backImage} alt="image">
            </img>
            <div className='module_index'>
                {id}
            </div>
            <div className="module_info_cont">
                <div className='module_name'>{name}</div>
                <div className='module_points'>{points} {" Points"}</div>
            </div>
            {/* <img className="module_front_image" 
                src={`${window.location.origin}/module_education_rights/`+frontImage} alt="image">
            </img> */}
        </div>
    )
}