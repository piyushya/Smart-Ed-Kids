import './styles/Button.css'

export default function Button({type="", title="you fked up", handleClick, style="blue", disabled=false}){
    return(
        <button disabled={disabled} className={`button button_${style} ${type}`} onClick={handleClick}>
            {title}
        </button>
    )
}