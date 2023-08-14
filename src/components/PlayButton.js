import { useState } from 'react';
import './PlayButton.css';

function PlayButton({message,children,onPlay,onPause}){
    console.log('render play button')
     const [playing,setPlaying] = useState(false);  
    function handleClick(e){
        console.log(e)
        e.stopPropagation()

        if(playing) onPause()
        else onPlay();

         setPlaying(!playing);
    }

    return (
        <button onClick={handleClick}>{children} : {playing?'▶️':'⏸️' }</button>
    )

}

export default PlayButton;