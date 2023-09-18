import Button from '../components/Button'
import { useNavigate } from "react-router-dom";
import './styles/login.css'

export default function Login(){
    const navigate = useNavigate();
    function handleClick(){
        console.log("Login button clicked");
        navigate('/home');
    }
    return(
        <div className='login_form_container'>
            <form className='login_form'>
                <input className='login_username' type='temp' placeholder='Username'></input>
                <input className='login_username' type='temp' placeholder='Password'></input>
                <label className='age_group_label'>Select Your age group</label>
                <div>
                    <Button type="nav_button" title="8 - 12" style="red"/>
                    <Button type="nav_button" title="13 - 16" style="green"/>
                </div>
                <Button type="nav_button" title="Start Learning" handleClick = {handleClick}/>
            </form>
        </div>
    )
}