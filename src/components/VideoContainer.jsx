import Button from "./Button"
import './styles/VideoContainer.css'

export default function VideoContainer({url, setVideoUrl}){
    return(
        <div className="video_container">
            <video controls>
                <source src={`${window.location.origin}/${url}`} type="video/mp4"/>
            </video>
            <div className="close_video_button">
                <Button title="close" style="button_red" handleClick={() => {
                    setVideoUrl("");
                }}/>
            </div>
        </div>
    )
}