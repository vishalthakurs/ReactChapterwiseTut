import { useState } from 'react';
import './App.css';
import Counter from './components/Counter';
import PlayButton from './components/PlayButton';
import Video from './components/Video';
import data from './data/data';
function App() {
  const [videos,setVideos]=useState(data);

  const handleClick=()=>{
    setVideos([...videos,{
      id:videos.length+1,
      title: 'Java tutorial',
      views: '1M',
      time: '1 year ago',
      channel: 'Vishal Dev',
      verified:"false"
    }])
  }
  return (
    <div className="App" onClick={()=>console.log('App')}>
      
      <div onClick={handleClick}><button>Add Video </button></div>
      {videos.map((video) => (
        <Video
          key={video.id}
          title={video.title}
          views={video.views}
          time={video.time}
          channel={video.channel}
          verified={video.verified}
          id={video.id}
        >
          <PlayButton
            onPlay={() => console.log('Playing..',video.title)}
            onPause={() => console.log('Paused..',video.title)}
          >
            {video.title}
          </PlayButton>
        </Video>
      ))}

      <div style={{ clear: 'both' }}>
        {/* <PlayButton message="play-msg" onPlay={()=>console.log('Play')} onPause={()=>console.log('Pause')}>Play</PlayButton> */}

        {/* <PlayButton message="pause-msg" onSmash={()=>alert('Playyy')}>Pause</PlayButton> */}
      </div>
      <Counter />
    </div>
  );
}

export default App;