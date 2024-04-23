import React from "react";

const Key = (props) => {
    
    let audio = new Audio(props.data.audio)
    audio.className = "clip"
    audio.id = props.data.key

    const playSound = () => {
        audio.play()
    }

    const playKeySound = (e) => {
        if(e.keyCode == props.data.code){
            playSound()
        }
    }

    return(
        <>
            <button className="drum-pad" id={props.data.key} onClick={playSound} onKeyDown={playKeySound} style={{backgroundColor: 'grey'}}>
                {props.data.key}
            </button>
        </>
    )
}
export default Key