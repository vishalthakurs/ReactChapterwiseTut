import { useContext, useState } from 'react';
import './PlayButton.css';
import ThemeContext from '../context/ThemeContext';

function PlayButton({message,children,onPlay,onPause}){

    const theme=useContext(ThemeContext)
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
        <button className={theme} onClick={handleClick}>{children} : {playing?'▶️':'⏸️' }</button>
    )

}

export default PlayButton;