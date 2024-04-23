import Display from "@/Components/Display";
import Keyboard from "@/Components/Keyboard";
import keys from "@/Utilities/keys";
import React,{ useEffect } from "react";

const drumMachineStyle = {
    display: 'flex',
    flexDirection: 'row',
    width: '620px',
    height: '376px',
    border: '3px solid orange'
}

const DrumMachine = () => {

    useEffect(()=>{
        document.body.addEventListener('keydown',playKey)
    },[])

    const playKey = (e) => {
        const key = document.getElementById(e.key.toUpperCase())
        if(!key){
            return
        }
        else{
            const display = document.getElementById('display')

            key.style.backgroundColor = "orange"
            let keyData = keys.filter(item => item.code == e.keyCode)
            let audio = new Audio(keyData[0].audio)
            display.innerText = keyData[0].audio.split("drums/")[1].split(".mp3")[0]
            audio.play()
            setTimeout(()=>{
                key.style.backgroundColor = 'grey'
            },100)
        }
    }

    return(
        <div id="wrapper">
            <div id="drum-machine" style={drumMachineStyle}>
                <Keyboard/>
                <Display/>
            </div>
        </div>
    )
}
export default DrumMachine