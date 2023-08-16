import React, { useContext } from 'react'
import PlayButton from './PlayButton'
import Video from './Video'
import VideosContext from '../context/VideosContext'
import axios from 'axios'


const VideoList = ({editVideo}) => {
  const videos=useContext(VideosContext);
  

  
  return (
    <div>
       {videos.map((video) => (
        <Video
          key={video.id}
          title={video.title}
          views={video.views}
          time={video.time}
          channel={video.channel}
          verified={video.verified}
          id={video.id}
          
          editVideo={editVideo}
        >
          <PlayButton
            onPlay={() => console.log('Playing..',video.title)}
            onPause={() => console.log('Paused..',video.title)}
          >
            {video.title}
          </PlayButton>
        </Video>
      ))}
      
    </div>
  )
}

export default VideoList
