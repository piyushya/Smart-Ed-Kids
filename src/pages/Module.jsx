import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import modules_data from '../module_data.json'
import { useParams } from "react-router-dom";
import '../styles/module.css'

export default function Module() {
    const {id} = useParams();
    const [score, setScore] = useState(0);
    const [sceneIndex, setSceneIndex] = useState(0);

    const navigate = useNavigate();

    const module = modules_data['modules'][id-1];

    // get all the available scenes
    const scenes = module.game.situations.map((scene, index) => {
        return (
            <SceneView key = {index} scene={scene}/>
        )
    });

    // get the test 
    const test = module.game.test;
    const options = test.options.map((option, index) => {
        return (
            <button className='option_button' key={index}>
                {option}
            </button>
        )
    });

    function nextScene(){
        setSceneIndex((sceneIndex + 1) % scenes.length);
    }

    function prevScene(){
        setSceneIndex((sceneIndex - 1) % scenes.length);
    }

    function TestContainer(){
        return (
            <div className='test_container'>
                <h1>{test.text}</h1>
                <div className='options_container'>
                    {options}
                </div>
            </div>
        )
    }

    function SceneView({scene}){
        return(
            <div className='scene_view'>
                <img className="scene_backImage" src={`${window.location.origin}/module_education_rights/`+ scene.backImage}></img>
                <img className="scene_frontImage" src={`${window.location.origin}/module_education_rights/`+ scene.frontImage}></img>
                <div className='scene_info'>
                    <p className='scene_text'>{scene.text}</p>
                    <div className='nav_btn_container'>
                        <button disabled={!(sceneIndex > 0)} className="prev_button module_nav_button" onClick = {prevScene}>⏮️</button>
                        <button disabled={!(sceneIndex < (scenes.length-1))} className="next_button module_nav_button" onClick = {nextScene}>⏭️</button>
                    </div>
                </div>
                <button className="home_button module_nav_button" onClick = {() => {
                    navigate('/');
                }}>🏠</button>
                {sceneIndex === (scenes.length-1) && <TestContainer/>}
            </div>
        )
    }

    return (
        <div>
            {scenes[sceneIndex]}
        </div>
    )
}