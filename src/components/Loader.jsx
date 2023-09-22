import './styles/Loader.css'

export default function Loader(){
    return(
        <>
            <div className="loader_container">
                <img className='loading_gif' src={`${window.location.origin}/catloading.gif`}></img>
            </div>
        </>
    )
}