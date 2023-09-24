import './styles/home.css'
import tooltip_data from '../tooltip_data.json'
import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from 'react'
import Button from '../components/Button'
import Loader from '../components/Loader';
import Nav from '../components/Nav';
import { logout, auth } from '../utils/firebaseAuth';
import { useAuthState } from "react-firebase-hooks/auth";
import ToolTipContainer from '../components/ToolTipContainer';
import ToolTipElement from '../components/ToolTipElement';
// import ModuleCard from '../components/ModuleCard';

export default function Home(){
    const navigate = useNavigate();
    const [tooltip_title, setTooltip_title] = useState("");
    const [viewGame, setViewGame] = useState(false);
    const [viewGameIndex, setViewGameIndex] = useState(0);
    const location = useLocation();
    const userData = location.state;
    console.log(userData);

    const [user, loading] = useAuthState(auth);
    const [pageLoading, setPageLoading] = useState(true);

    // useEffect(() => {
    //     console.log(userData);
    //     if (loading) return;
    //     if (!user) return navigate("/login");
    // }, [user, loading]);

    useEffect(() => {
        
            // Simulate a minimum display time of 1 second
            setTimeout(() => {
              setPageLoading(false);
            }, 1000); // Minimum display time of 1 second
          
    }, [])

    function BottomInfoContainer1(){
        return(
            <div className='bottom_info_container'>
                <h1>Helpline Numbers</h1>
                <ul>
                    <li><ToolTipElement title={"Childline India"} setTooltip_title={setTooltip_title}/></li>
                    <li><ToolTipElement title={"(NCPCR)"} setTooltip_title={setTooltip_title}/></li>
                    <li><ToolTipElement title={"Childline India"} setTooltip_title={setTooltip_title}/></li>
                    <li><ToolTipElement title={"Child Helpline (For Online Child Abuse)"} setTooltip_title={setTooltip_title}/></li>
                    <li><ToolTipElement title={"Police Helpline (Dial 100)"} setTooltip_title={setTooltip_title}/></li>
                    <li><ToolTipElement title={"Women and Child Helpline (WCD)"} setTooltip_title={setTooltip_title}/></li>
                </ul>
            </div>
        )
    }

    function BottomInfoContainer2(){
        return(
            <div className='bottom_info_container'>
                <h1>Child Rights Organisations</h1>
                <ul>
                    <li><ToolTipElement title={"National Commission for Protection of Child Rights (NCPCR)"} setTooltip_title={setTooltip_title}/></li>
                    <li><ToolTipElement title={"Save the Children"} setTooltip_title={setTooltip_title}/></li>
                    <li><ToolTipElement title={"Child Rights and You (CRY)"} setTooltip_title={setTooltip_title}/></li>
                    <li><ToolTipElement title={"Pratham"} setTooltip_title={setTooltip_title}/></li>
                    <li><ToolTipElement title={"Mobile Creches"} setTooltip_title={setTooltip_title}/></li>
                    <li><ToolTipElement title={"Butterflies India"} setTooltip_title={setTooltip_title}/></li>
                    <li><ToolTipElement title={"Bal Vikas Dhara (BVD)"} setTooltip_title={setTooltip_title}/></li>
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

    function navigatePage(page){
        navigate(`/${page}`, {state: userData });
    }

    function handleLogout(){
        setPageLoading(true);
        setTimeout(() => {
            logout();
            setPageLoading(false)
        }, 1000);
        console.log("logout succesful")
    }

    return(
        <>
            {pageLoading && <Loader/>}

            {tooltip_title.length > 0 && 
            <ToolTipContainer title={tooltip_title} setTooltip_title={setTooltip_title}/>}

            <Nav handleLogout={handleLogout} user={user}/>

            {/* Intro Container */}
            <article className='intro_container'>
                <div className='intro_text_container'>
                    <div className='intro_text'>
                    Welcome {user ? userData.username : ""} to &quot;Know Your Rights JR.&quot; - 
                    Discover, understand, and embrace your rights with us!
                    </div>
                    {/* Don't show login signup if user logged in */}
                    {!user && <div className='loginsignup_container'>
                        <Button title='SIGNUP' style='button_red' handleClick={() => {
                            navigatePage("signup");
                        }}/>
                        <Button title='LOGIN' style='button_green' handleClick={() => {
                            navigatePage("login");
                        }}/>
                    </div>}
                </div>
                <div className='intro_video_container'>
                    <img src='./introimage.png'></img>
                    <div className='intro_video_icon'>
                        <img src='./play_intro.png'></img>
                    </div>
                </div>
            </article>

            {/* Course Container */}
            <article className="course_container">
                <div className="float-layout">
                    <div className="course_intro_image">
                        <div className='course_intro_image_container'>
                            <div className='course_stars_container'>
                                <img src='./progress_star.png'></img>
                                <div className='complete_progress_bar' style={{width : "70%"}}>

                                </div>
                            </div>
                            <img className='course_bg_image' src="./course_intro.avif"/>
                        </div>
                        <div className="course_intro_text">
                            <div className="course_intro_title">Learn through this pathway</div>
                            <div className="course_intro_desc">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce ullamcorper
                            mollis tempus. Mauris eu maximus lectus, eu auctor justo. Aenean porta purus
                            vel commodo consequat.
                            </div>
                            <Button disabled={!user} title={user ? "START LEARNING" : "LOGIN/SIGNUP TO CONTINUE"} style='button_green' handleClick={() => {
                                navigatePage("course");
                            }}/>
                        </div>
                    </div>
                </div>
            </article>

            {/* Games Container */}
            <div className='zig_zag zig_zag_break'>

            </div>
            <article className='mini_games_container'>
                {/* <h1 className='modules_heading'>
                    Play these interactive games and boost your learning
                </h1> */}
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
                    {/* <div className='external_game'>
                        <iframe width="552" height="167" src="https://itch.io/embed/2263529"><a href="https://skul1cru5h3r.itch.io/proto">Proto by SKUL1CRU5H3R</a></iframe>
                    </div> */}
                </div>
            </article>

            <Bottom/>
        </>
    )
}

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
