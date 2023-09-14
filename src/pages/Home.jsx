import '../home.css'
import modules_data from '../module_data.json'
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
            <img src={"/"+image} alt="image"></img>
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

function Bottom(){
    return (
        <div className="bottom_bar">
            <footer className='foot_info'>
                <p>Helpline Numbers</p>
                <ul>
                    <li>3453453453</li>
                    <li>3453453453</li>
                    <li>3453453453</li>
                    <li>3453453453</li>
                </ul>
            </footer>
            <img src="./bottom.png"></img>
        </div>
    )
}

const modules = modules_data.modules.map((module) => {
    return (
        <ModuleCard 
            key = {module.title} 
            name = {module.title}
            id = {module.id}
            image = {module.image}
            points = {module.points}
        />
    )
})

export default function Home(){

    const [profile, setProfile] = useState({
        "name" : "Aryan",
        "image" : "./profile.jpg",
        "age" : 10,
        "score" : 0,
        "completed_modules" : []
    });

    return(
        <>
            <Nav/>
            <article>
                <h1 className='modules_heading'>
                    Know your rights through these fun modules 😀
                </h1>
                <div className='modules_container'>
                    {modules}
                </div>
            </article>
            <article>
                <h1 className='modules_heading'>
                    Learn about child rights organisations 🏛️
                </h1>
                <div className='modules_container'>
                    {modules}
                </div>
            </article>
            <Bottom/>
        </>
    )
}