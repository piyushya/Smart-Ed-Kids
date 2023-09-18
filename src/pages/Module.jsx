import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import modules_data from '../module_data.json'
import { useParams } from "react-router-dom";
import './styles/module.css'
import Button from '../components/Button'

export default function Module() {
    const {id} = useParams();
    const [score, setScore] = useState(0);
    const [sceneIndex, setSceneIndex] = useState(0);
    const [correctSelectIndex, setCorrectSelectIndex] = useState([]);
    const [allSelectIndex, setAllSelectIndex] = useState([]);
    const [OptDescVisible, setOptDescVisible] = useState(false);
    const [OptClickIndex, setOptClickIndex] = useState(0);
    const [playing, setPlaying] = useState(true);

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
            <Button
                key={index}
                title={option}
                type={"option_button"}
                style="yellow"
                handleClick={() => {
                    handle_option_click(index);
                    setOptDescVisible(true);
                }}
            />
        )
    });

    // handle score changes and show description based on the option the user chooses
    function handle_option_click(index){
        setOptClickIndex(index);
        if((correctSelectIndex.length < test.correctIndex.length) && !allSelectIndex.includes(index)){
            if(test.correctIndex.includes(index)){
                setScore((prev) => (prev+5));
                setCorrectSelectIndex((prev) => ([...prev, index]));
            }
            else{
                setScore((prev) => (prev-1));
            }
            setAllSelectIndex((prev) => ([...prev, index]));
        }
    }

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
                {sceneIndex < (scenes.length-1) && <div className='scene_info'>
                    <p className='scene_text'>{scene.text}</p>
                    <div className='nav_btn_container'>
                        <Button
                            title="⏮️"
                            type="module_nav_button"
                            handleClick={prevScene}
                            style="red"
                            disabled={!(sceneIndex > 0)}
                        />
                        <Button
                            title="⏭️"
                            type="module_nav_button"
                            handleClick={nextScene}
                            style="green"
                            disabled={!(sceneIndex < (scenes.length-1))} 
                        />
                    </div>
                </div>}
                <div className='home_button_container'>
                    <Button
                        title="🏠"
                        type="module_nav"
                        handleClick={() => {
                            navigate('/home');
                        }}
                        style="blue"
                    />
                </div>
                {sceneIndex === (scenes.length-1) && <TestContainer/>}
            </div>
        )
    }

    function OptionDescription({index, playing}){
        const isCorrect = test.correctIndex.includes(index);
        const statusClass = isCorrect ? "answer_correct" : "answer_wrong";
        return(
            <div className={'option_description'}>
                {playing && 
                    <div className={`score_change_indicator ${isCorrect?'score_change_indicator_pos':'score_change_indicator_neg'}`}>
                        {isCorrect ? "+5" : "-1"}
                    </div>
                }           
                <div className={`answer_status ${statusClass}`}>
                    {((isCorrect) ? 
                        "That is correct" : "That is not right")
                    }
                </div>
                {playing && <div className='score_container'>
                    {"score : "} {score}
                </div>}
                <div className='option_explanation'>
                    {test.explanations[index]}
                </div>
                <Button 
                    handleClick = {() => {
                        setOptDescVisible(false)
                        // check if user has answered all the correct questions
                        if(correctSelectIndex.length === test.correctIndex.length){
                            setPlaying(false);
                        }
                    }}
                    title="close"
                    style="red"
                />
            </div>
        )
    }

    return (
        <div>
            {OptDescVisible && 
            <div className='option_desc_shadow'>
                <OptionDescription 
                    index={OptClickIndex}
                    playing={playing}
                />
            </div>}
            {scenes[sceneIndex]}
        </div>
    )
}