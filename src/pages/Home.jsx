import './styles/home.css'
import modules_data from '../module_data.json'
import tooltip_data from '../tooltip_data.json'
import { useNavigate } from "react-router-dom";
import { useState } from 'react'
import Button from '../components/Button'
import ModuleCard from '../components/ModuleCard';

function handle_nav_button_click(url){
    console.log("clicked")
}

function Nav(){
    return (
        <div className="nav_bar">
            <img src="./nav-Bar.png"></img>
            <div className='nav_container'>
                <Button 
                    title="profile 😀" 
                    type="home_nav_button" 
                    handleClick = {() => {
                        handle_nav_button_click("#");
                    }}
                    style="blue"
                />
                <Button 
                    title="language ⚙️" 
                    type="home_nav_button" 
                    handleClick = {() => {
                        handle_nav_button_click("#");
                    }}
                    style="red"
                />
                <Button 
                    title="leaderboard 📜" 
                    type="home_nav_button" 
                    handleClick = {() => {
                        handle_nav_button_click("#");
                    }}
                    style="green"
                />
                <Button 
                    title="get-help 🆘" 
                    type="home_nav_button" 
                    handleClick = {() => {
                        handle_nav_button_click("#");
                    }}
                    style="yellow"
                />
            </div>
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

    function BottomInfoContainer(){
        return(
            <div className='bottom_info_container'>
                <h1>Helpline Numbers</h1>
                <ul>
                    <li><Tooltip title={"Childline India"}/></li>
                    <li><Tooltip title={"(NCPCR)"}/></li>
                    <li><Tooltip title={"Childline India"}/></li>
                    <li><Tooltip title={"Child Helpline (For Online Child Abuse)"}/></li>
                    <li><Tooltip title={"Police Helpline (Dial 100)"}/></li>
                    <li><Tooltip title={"Women and Child Helpline (WCD)"}/></li>
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
                <div className='bottom_kids_img_container'>
                    <img className="bottom_kids_img" src="./bottom.png" alt="children"></img>
                </div>
            </div>
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