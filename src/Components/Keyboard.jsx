import React from "react"
import keys from "@/Utilities/keys"
import Key from "./Key"

const Keyboard = () => {
    
    return(
        <div id="keyboard" className="keyboard-container">
            {keys.map(key=><Key data={key} key={key.key}/>)}
        </div>
    )
}
export default Keyboard