import '../styles/home.css'
import modules_data from '../module_data.json'
import tooltip_data from '../tooltip_data.json'
import { useNavigate } from "react-router-dom";
import { useState } from 'react'

function ModuleCard({name, id, image, points}){
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

function NavButton({title, url}){
    return(
        <button className={`nav_button_${title.split(" ")[0]} nav_button`} onClick={() => {
            // navigate to url
        }}>
            {title}
        </button>
    )
}

function Nav(){
    return (
        <div className="nav_bar">

            <img src="./nav-Bar.png"></img>

            <div className='nav_container'>
                <NavButton title="profile 😀" url = "#"/>
                <NavButton title="language ⚙️" url = "#"/>
                <NavButton title="leaderboard 📜" url = "#"/>
                <NavButton title="get-help 🆘" url = "#"/>
            </div>
        </div>
    )
}

function BottomInfoContainer(){
    return(
        <div className='bottom_info_container'>
            <h1>Helpline Numbers</h1>
            <ul>
                <li>3453453453</li>
                <li>3453453453</li>
                <li>3453453453</li>
                <li>3453453453</li>
            </ul>
        </div>
    )
}

function Bottom(){

    return (
        <div className="bottom_bar">
            <footer className='foot_info'>
                <BottomInfoContainer/>
                <BottomInfoContainer/>
            </footer>
            <img src="./bottom.png"></img>
        </div>
    )
}

const modules = modules_data.modules.map((module) => {
    return (
        <ModuleCard 
            key = {module.id} 
            name = {module.title}
            id = {module.id}
            image = {module.image}
            points = {module.points}
        />
    )
})

export default function Home(){

    const [tooltip_desc, setTooltip_desc] = useState("");

    const [profile, setProfile] = useState({
        "name" : "Aryan",
        "image" : "./profile.jpg",
        "age" : 10,
        "score" : 0,
        "completed_modules" : []
    });

    function Tooltip({title}){
        function showDescription(){
            if(tooltip_desc === ""){
                setTooltip_desc(tooltip_data[title]);
            }
        }
        return(
            <>
                {" "}<span onClick={showDescription} className='tooltip_title'>{title}</span>{" "}
            </>
        )
    }

    return(
        <>
            {tooltip_desc.length > 0 && 
            <div className='tooltip_container'>
                <div className='tooltip_wrapper'>
                    {tooltip_desc}
                    <button className='tooltip_close_btn' onClick={()=>{
                        console.log("close tooltip");
                        setTooltip_desc("");
                    }}>close</button>
                </div>
            </div>}

            <Nav/>
            <article>
                <h1 className='modules_heading top_modules_heading'>
                    Know your rights through these fun modules 😀
                </h1>
                <div className='modules_container'>
                    {modules}
                </div>
            </article>

            <article>
                <h1 className='modules_heading'>
                    Learn about <Tooltip title="Child Rights Organisations"/> 🏛️
                </h1>
                <div className='modules_container'>
                    {modules}
                </div>
            </article>

            <article>
                <h1 className='modules_heading'>
                    Play these mini games and learn more about the <Tooltip title="Indian Laws"/>that protect your rights
                </h1>
                <div className='mini_game_container'>
                    <div className='mini_game'></div>
                    <div className='mini_game'></div>
                    <div className='mini_game'></div>
                    <div className='mini_game'></div>
                </div>
            </article>
            <Bottom/>
        </>
    )
}