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
            frontImage = {module.game.situations[0].frontImage}
            backImage = {module.game.situations[0].backImage}
            points = {module.points}
        />
    )
})

const organisations = modules_data.organisations.map((module) => {
    return (
        <ModuleCard 
            key = {module.id} 
            name = {module.title}
            id = {module.id}
            frontImage = {module.game.situations[0].frontImage}
            backImage = {module.game.situations[0].backImage}
            points = {module.points}
        />
    )
})

const laws = modules_data.laws.map((module) => {
    return (
        <ModuleCard 
            key = {module.id} 
            name = {module.title}
            id = {module.id}
            frontImage = {module.game.situations[0].frontImage}
            backImage = {module.game.situations[0].backImage}
            points = {module.points}
        />
    )
})

export default function Home(){

    const [tooltip_desc, setTooltip_desc] = useState("");
    const [viewGame, setViewGame] = useState(false);
    const [viewGameIndex, setViewGameIndex] = useState(0);

    const gameSrcs = [
        "https://itch.io/embed-upload/8710761?color=333333",
        "https://itch.io/embed/2263529",
        "https://itch.io/embed-upload/8710761?color=333333",
        "https://itch.io/embed-upload/8710761?color=333333"
    ]

    const gameHrefs = [
        "https://piyushya.itch.io/child-rights-3d",
        "https://skul1cru5h3r.itch.io/proto",
        "https://piyushya.itch.io/child-rights-3d",
        "https://piyushya.itch.io/child-rights-3d"
    ]

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

    function BottomInfoContainer1(){
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

    function BottomInfoContainer2(){
        return(
            <div className='bottom_info_container'>
                <h1>Child Rights Organisations</h1>
                <ul>
                    <li><Tooltip title={"National Commission for Protection of Child Rights (NCPCR)"}/></li>
                    <li><Tooltip title={"Save the Children"}/></li>
                    <li><Tooltip title={"Child Rights and You (CRY)"}/></li>
                    <li><Tooltip title={"Pratham"}/></li>
                    <li><Tooltip title={"Mobile Creches"}/></li>
                    <li><Tooltip title={"Butterflies India"}/></li>
                    <li><Tooltip title={"Bal Vikas Dhara (BVD)"}/></li>
                </ul>
            </div>
        )
    }

    function Bottom(){
        return (
            <div className="bottom_bar">
                <footer className='foot_info'>
                    <BottomInfoContainer1/>
                    <BottomInfoContainer2/>
                </footer>
                <div className='bottom_kids_img_container'>
                    <img className="bottom_kids_img" src="./bottom.png" alt="children"></img>
                </div>
            </div>
        )
    }

    function showGame(index){
        setViewGame(true);
        setViewGameIndex(index);
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
                    {organisations}
                </div>
            </article>

            <article>
                <h1 className='modules_heading'>
                    Learn about <Tooltip title="Indian Laws"/> that protect your rights
                </h1>
                <div className='modules_container'>
                    {laws}
                </div>
            </article>

            <article>
                <h1 className='modules_heading'>
                    Play these interactive games and boost your learning
                </h1>
                <div className='games_container'>
                    <div className='games_intro'>
                        <div className='game_card' onClick={() => {showGame(0)}}>
                            <img src='./games/gameCard1.jpg'></img>
                            <div className='game_card_info'>
                                <h1>Rights Land</h1>
                                <p>Defeat the monsters in Rights land and save the children rights</p>
                            </div>
                        </div>
                        <div className='game_card' onClick={() => {showGame(1)}}>
                            <img src='./games/gameCard1.jpg'></img>
                            <div className='game_card_info'>
                                <h1>Equality Quest</h1>
                                <p>Join a group of young adventurers on a quest to explore the world of equality and fairness.</p>
                            </div>
                        </div>
                        <div className='game_card' onClick={() => {showGame(2)}}>
                            <img src='./games/gameCard1.jpg'></img>
                            <div className='game_card_info'>
                                <h1>Rights Defenders</h1>
                                <p>In this action-packed role-playing game, you become child rights superhero.</p>
                            </div>
                        </div>
                        <div className='game_card' onClick={() => {showGame(3)}}>
                            <img src='./games/gameCard1.jpg'></img>
                            <div className='game_card_info'>
                                <h1>Righteous Puzzlers</h1>
                                <p>This jigsaw puzzle game helps children piece together the puzzle of child rights</p>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
            <Bottom/>
            {viewGame && <div className='gameView'>
                <iframe
                    src={gameSrcs[viewGameIndex]}
                    width={640} 
                    height={380}>
                    <a href={gameHrefs[viewGameIndex]}>
                        Play child rights 3d on itch.io
                    </a>
                </iframe>
                <Button 
                    handleClick={() => (setViewGame(false))}
                    title = "Close Game"
                    style="red"
                />
            </div>}
        </>
    )
}