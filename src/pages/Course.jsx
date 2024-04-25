import Button from '../components/Button'
import { useNavigate, useLocation } from "react-router-dom";
import './styles/course.css'
import { useState, useEffect } from 'react';
import { auth } from '../utils/firebaseAuth';
import { useAuthState } from "react-firebase-hooks/auth";

import useScrollToTop from '../hooks/useScrollToTop';

export default function Course(){
    useScrollToTop();
    const navigate = useNavigate();
    const location = useLocation();
    const userData = location.state;
    console.log(userData);

    const [user, loading] = useAuthState(auth);
    const [pageLoading, setPageLoading] = useState(true);

    useEffect(() => {
        if (loading) return;
        if (!user) return navigate("/");
    }, [user, loading]);

    useEffect(() => {
        
            // Simulate a minimum display time of 1 second
            setTimeout(() => {
              setPageLoading(false);
            }, 1000); // Minimum display time of 1 second
          
    }, [])

    function openChapter(chapter){
        navigate(`/chapter/${chapter}`, {state : userData});
    }

    return(
        <>
            <div className='course_chapter_container'>

                {/* Course Nav bar */}

                <div className="course_nav_bar course_zig_zag">
                    <div className='site_logo_container'>
                        <img className='site_logo' src='./site_logo.png'/>
                    </div>
                    <div className='course_nav_container'>
                        <Button
                            title="🏠"
                            type="module_nav"
                            handleClick={() => {
                                navigate("/", {state: userData });
                            }}
                            style="button_blue"
                        />
                    </div>
                </div>

                {/* Course Chapters Container */}

                <div className='chapters_container'>

                    {/* Course Card Container */}

                    <div className="chapter_card">
                        <div className="chapter_float-layout">
                            <div className="chapter_intro_image">
                                <div className='chapter_intro_image_container'>
                                    <div className='chapter_stars_container'>
                                        <img src='./progress_star.png'></img>
                                        <div className='chapter_complete_progress_bar' style={{width : "70%"}}>

                                        </div>
                                    </div>
                                    <img className='chapter_bg_image' src="./course_intro.avif"/>
                                </div>
                                <div className="chapter_intro_text">
                                    <div className="chapter_intro_title">What are Rights? and why should you care</div>
                                    <div className="chapter_intro_desc">
                                    In this exciting chapter, you will embark on a journey to discover the fascinating world of rights and why they are so important.
                                    </div>
                                    <Button disabled={!user} title="OPEN CHAPTER" style='button_green' handleClick={() => {
                                        openChapter("rights");
                                    }}/>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Course Card Container */}

                    <div className="chapter_card">
                        <div className="chapter_float-layout">
                            <div className="chapter_intro_image">
                                <div className='chapter_intro_image_container'>
                                    <div className='chapter_stars_container'>
                                        <img src='./progress_star.png'></img>
                                        <div className='chapter_complete_progress_bar' style={{width : "30%"}}>

                                        </div>
                                    </div>
                                    <img className='chapter_bg_image' src="./course_intro.avif"/>
                                </div>
                                <div className="chapter_intro_text">
                                    <div className="chapter_intro_title">What different rights you have</div>
                                    <div className="chapter_intro_desc">
                                    In this chapter We&apos;ll embark on a journey to explore the diverse categories of rights, Through relatable stories, engaging activities, and thought-provoking examples.
                                    </div>
                                    <Button disabled={!user} title="OPEN CHAPTER" style='button_green' handleClick={() => {
                                        openChapter("rights");
                                    }}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Course Card Container */}

                    <div className="chapter_card">
                        <div className="chapter_float-layout">
                            <div className="chapter_intro_image">
                                <div className='chapter_intro_image_container'>
                                    <div className='chapter_stars_container'>
                                        <img src='./progress_star.png'></img>
                                        <div className='chapter_complete_progress_bar' style={{width : "50%"}}>

                                        </div>
                                    </div>
                                    <img className='chapter_bg_image' src="./course_intro.avif"/>
                                </div>
                                <div className="chapter_intro_text">
                                    <div className="chapter_intro_title">Child Rights organisations and NGO&apos;s</div>
                                    <div className="chapter_intro_desc">
                                    By understanding the work of Child Rights Organizations and NGOs, you will be encouraged to take small steps in your own community to support children in need.
                                    </div>
                                    <Button disabled={!user} title="OPEN CHAPTER" style='button_green' handleClick={() => {
                                        openChapter("rights");
                                    }}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Course Card Container */}

                    <div className="chapter_card">
                        <div className="chapter_float-layout">
                            <div className="chapter_intro_image">
                                <div className='chapter_intro_image_container'>
                                    <div className='chapter_stars_container'>
                                        <img src='./progress_star.png'></img>
                                        <div className='chapter_complete_progress_bar' style={{width : "5%"}}>

                                        </div>
                                    </div>
                                    <img className='chapter_bg_image' src="./course_intro.avif"/>
                                </div>
                                <div className="chapter_intro_text">
                                    <div className="chapter_intro_title">Indian Laws that protect your Rights</div>
                                    <div className="chapter_intro_desc">
                                    We dive into the fascinating world of Indian laws and how they play a crucial role in safeguarding your rights
                                    </div>
                                    <Button disabled={!user} title="OPEN CHAPTER" style='button_green' handleClick={() => {
                                        openChapter("rights");
                                    }}/>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Course Card Container */}

                    <div className="chapter_card">
                        <div className="chapter_float-layout">
                            <div className="chapter_intro_image">
                                <div className='chapter_intro_image_container'>
                                    <div className='chapter_stars_container'>
                                        <img src='./progress_star.png'></img>
                                        <div className='chapter_complete_progress_bar' style={{width : "89%"}}>

                                        </div>
                                    </div>
                                    <img className='chapter_bg_image' src="./course_intro.avif"/>
                                </div>
                                <div className="chapter_intro_text">
                                    <div className="chapter_intro_title">Child Rights around the globe</div>
                                    <div className="chapter_intro_desc">
                                    In this eye-opening chapte, we embark on a global adventure to explore the fascinating concept of child rights across the world
                                    </div>
                                    <Button disabled={!user} title="OPEN CHAPTER" style='button_green' handleClick={() => {
                                        openChapter("rights");
                                    }}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
