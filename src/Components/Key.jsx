import React,{useState,useEffect} from "react";

const Key = (props) => {
    
    const [styleHook, setStyleHook] = useState({backgroundColor: 'grey'})
    const [audio, setAudio] = useState(null)

    useEffect(()=>{
        const configureAudioElem = () => {
            setAudio(new Audio(props.data.audio))
        }
        configureAudioElem()
    },[])

    useEffect(()=>{
        if(!audio){
            
        }
        else{
            audio.className = "clip"
            audio.id = props.data.key
        }
    },[audio])

    const playSound = () => {
        setStyleHook({backgroundColor: 'orange'})
        audio.play()
        setTimeout(() => {
            setStyleHook({backgroundColor: 'grey'})
        }, 100);
    }

    const playKeySound = (e) => {
        if(e.keyCode == props.data.code){
            playSound()
        }
    }

    return(
        <>
            <button className="drum-pad" id={props.data.key} onMouseDown={playSound} onKeyDown={playKeySound} style={styleHook}>
                {props.data.key}
            </button>
        </>
    )
}
export default Key