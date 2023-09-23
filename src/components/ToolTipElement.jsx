import { useState } from 'react'

export default function ToolTipElement({title, setTooltip_title}){
    function showDescription(){
        setTooltip_title(title);
    }
    return(
        <>
            {" "}<span onClick={showDescription} className='tooltip_title'>{title}</span>{" "}
        </>
    )
}