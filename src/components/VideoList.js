import React from 'react'
import PlayButton from './PlayButton'
import Video from './Video'


const VideoList = ({videos,deleteVideo,editVideo}) => {


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
          deleteVideo={deleteVideo}
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
