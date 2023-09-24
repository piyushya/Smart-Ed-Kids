import Button from '../components/Button'
import Loader from '../components/Loader';
import { useNavigate} from "react-router-dom";
import './styles/login.css'
import { useState, useEffect } from 'react';
import { SignIn, isEmailRegistered, auth } from '../utils/firebaseAuth';
import { useAuthState } from "react-firebase-hooks/auth";
import { userExists, getUserData } from '../utils/userController';

export default function Login(){
    const navigate = useNavigate();
    const [user, loading] = useAuthState(auth);
    const [pageLoading, setPageLoading] = useState(true);

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
        if (user) {
            getUserData(userData.username).then((data) => {
                navigate("/home", {state: data });
            })
        }
    }, [user, loading]);

    const [userData, setUserData] = useState({
        "username" : "",
        "password" : "",
    })

    const [avatar, setAvatar] = useState(0);
    let src = `${window.location,origin}/avatar/${avatar}.png`;

    async function handleLogIn(){
        const email = userData.username+"@gmail.com";
        const isOldUser = await userExists(userData.username);
        if(!isOldUser){
            // User already registered so Navgate to signin page
            console.log("username not registered")
        }
        else{
            try {
                await SignIn(email, userData.password).then((user) => {
                    // User successfully created so Navigate to new page etc
                    console.log("signinSuccesful");
                });
            } catch (e) {
                console.log(e.message);
            }
        }
    }


    return(
        <>
            {pageLoading && <Loader/>}
            <div className='home_button_container'>
                <Button
                    title="🏠"
                    type="module_nav"
                    handleClick={() => {
                        navigate("/home");
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
                    handleLogIn().finally(() => {
                        // remove loader
                        setPageLoading(false);
                        console.log("done loading")
                    })
                }}>
                    <div className='login_data'>
                        <input 
                            className='login_username' 
                            type='text' 
                            name="username"
                            placeholder='Username'
                            value = {userData.username}
                            onChange={(event) => {setUserData((prev) => ({...prev, "username" : event.target.value}))}}
                        />
                        <input
                            className='login_username' 
                            type='password' 
                            name="username"
                            placeholder='Password'
                            value={userData.password}
                            onChange={(event) => {setUserData((prev) => ({...prev, "password" : event.target.value}))}}
                        />
                    </div>
                    <Button submitType="submit" type="nav_button" title="Start Learning"/>
                    <Button submitType="button" type="nav_button" title="Not Registered?"
                    handleClick={() => {
                        navigate("/signup");
                    }}/>
                </form>
                <div className='avatar_display'>
                    <img src={src} alt="avatar" />
                </div>
            </div>
        </>
    )
}
