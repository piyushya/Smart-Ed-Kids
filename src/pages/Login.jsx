import Button from '../components/Button'
import { useNavigate } from "react-router-dom";

export default function Login(){
    const navigate = useNavigate();
    function handleClick(){
        console.log("Login button clicked");
        navigate('/home');
    }
    return(
        <Button type="nav_button" title="Login" handleClick = {handleClick}/>
    )
}