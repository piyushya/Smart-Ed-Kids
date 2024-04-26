import Button from '../components/Button'
import Loader from '../components/Loader';
import { useNavigate } from "react-router-dom";
import './styles/login.css'
import { useState, useEffect } from 'react';
import { SignUp, isEmailRegistered, auth } from '../utils/firebaseAuth';
import { useAuthState } from "react-firebase-hooks/auth";
import { userExists } from '../utils/userController';
import { addNewUser } from '../utils/userController';

export default function Signup(){
    const navigate = useNavigate();
    const [user, loading] = useAuthState(auth);
    const [pageLoading, setPageLoading] = useState(true);

    const [userData, setUser] = useState({
        "username" : "",
        "password" : "",
        "agegroup" : 0,
        "language" : "english"
    })

    useEffect(() => {
            // Simulate a minimum display time of 1 second
            setTimeout(() => {
              setPageLoading(false);
            }, 1000); // Minimum display time of 1 second
    }, [])

    useEffect(() => {
        if (loading) {
          // maybe trigger a loading screen
          return;
        }
        if (user) navigate("/", {state: userData });
    }, [user, loading]);

    const [avatar, setAvatar] = useState(0);
    let src = `${window.location,origin}/avatar/${avatar}.png`;
    const avatar_count = 8;

    async function handleSignUp(){
        const email = userData.username+"@gmail.com";
        const isOldUser = await userExists(userData.username);
        if(isOldUser){
            // User already registered so Navgate to signin page
            console.log("username already in use")
        }
        else{
            try {
                await SignUp(email, userData.password).then((user) => {
                    addNewUser(userData);
                    // User successfully created so Navigate to new page etc
                    console.log("signupSuccesful");
                });
            } catch (e) {
                console.log(e.message);
            }
        }
    }

    function prevAvatar(){
        if(avatar === 0){
            setAvatar(avatar_count-1);
            return;
        }
        setAvatar((prev) => (Math.abs((prev-1)%avatar_count)));
    }

    function nextAvatar(){
        setAvatar((prev) => ((prev+1)%avatar_count));
    }


    return(
        <>
            {pageLoading && <Loader/>}
            <div className='home_button_container'>
                <Button
                    title="🏠"
                    type="module_nav"
                    handleClick={() => {
                        navigate("/");
                    }}
                    style="button_blue"
                />
            </div>
            <div className='login_form_container' style={{
                backgroundImage : `url("${window.location.origin}/b6.jpg")`
            }}>
                <form className='login_form' onSubmit={(e) => {
                    e.preventDefault();
                    if(userData.password.length < 3 || userData.username.length === 0){
                        console.log("short password or empty username");
                        return;
                    }
                    // add a loader
                    setPageLoading(true);
                    console.log("loading")
                    handleSignUp().finally(() => {
                        // remove loader
                        setPageLoading(false);
                        console.log("done loading")
                    })
                }}>
                    <div className='avatar_select_container'>
                        <div className='prev_avatar' onClick={prevAvatar}>
                            <img src={`${window.location.origin}/login/prev.png`}/>
                        </div>
                        <div className='avatar_container'>
                            <img src={src}></img>
                        </div>
                        <div className='next_avatar' onClick={nextAvatar}>
                            <img src={`${window.location.origin}/login/next.png`}/>
                        </div>
                    </div>
                    <div className='login_data'>
                        <input 
                            className='login_username' 
                            type='text' 
                            name="username"
                            placeholder='Username'
                            value = {userData.username}
                            onChange={(event) => {setUser((prev) => ({...prev, "username" : event.target.value}))}}
                        />
                        <input
                            className='login_username' 
                            type='password' 
                            name="password"
                            placeholder='Password'
                            value={userData.password}
                            onChange={(event) => {setUser((prev) => ({...prev, "password" : event.target.value}))}}
                        />
                    </div>

                    <label className='personalised_data_container'>
                        Select your age group :<br/>
                        <label>
                            4 - 8
                            <input
                                name="4-8"
                                type="checkbox"
                                checked={userData.agegroup ? false : true}
                                onChange={(event) => {
                                    setUser((prev) => ({...prev, "agegroup" : (event.target.checked ? 0 : 1)}))
                                }}
                            />
                        </label><br/>
                        <label>
                            9 - 14
                            <input
                                name="9-14"
                                type="checkbox"
                                checked={userData.agegroup ? true : false}
                                onChange={(event) => {
                                    setUser((prev) => ({...prev, "agegroup" : (event.target.checked ? 1 : 0)}))
                                }}
                            />
                        </label>
                    </label>
                    
                    <label className='personalised_data_container'>
                        Select Language :
                        <select value={userData.language} onChange={(event) => {
                            setUser((prev) => ({...prev, "language" : event.target.value}))
                        }}>
                            <option value="english">English</option>
                            <option value="hindi">Hindi</option>
                        </select>
                    </label>
                    <div className='signup_page_buttons_container'>
                        <Button submitType="submit" type="nav_button" title="Start Learning"/>
                        <Button submitType="button" type="nav_button" title="Already Registered?"
                        handleClick={() => {
                            navigate("/login");
                        }}/>
                    </div>
                </form>
                <div className='avatar_display'>
                    <img src={src} alt="avatar" />
                </div>
            </div>
        </>
    )
}
