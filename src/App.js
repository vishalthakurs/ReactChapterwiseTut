import { useEffect, useReducer, useState } from 'react';
import './App.css';
import AddVideo from './components/AddVideo';
//import videoDB from './data/data';
import VideoList from './components/VideoList';
import ThemeContext from './context/ThemeContext';
import VideosContext from './context/VideosContext';
import VideoDispatchContext from './context/VideosDispatchContext';
import Counter from './components/Counter';
import axios from 'axios';

function App() {
  console.log('render App');
  const [editableVideo, setEditableVideo] = useState(null);
  const [mode, setMode] = useState('darkMode');



  function videoReducer(videos, action) {
    switch (action.type) {
      case 'LOAD':
        return action.payload;
      case 'ADD':
        return [...videos, { ...action.payload, id: videos.length + 1 }];
      case 'DELETE':
        return videos.filter((video) => video.id !== action.payload);
      case 'UPDATE':
        const index = videos.findIndex((v) => v.id === action.payload.id);
        const newVideos = [...videos];
        newVideos.splice(index, 1, action.payload);
        setEditableVideo(null);
        return newVideos;
      default:
        return videos;
    }
  }
  const [videos, dispatch] = useReducer(videoReducer, []);

  useEffect(()=>{
    getVideos();
  },[])

  const getVideos=async ()=>{
    const resp=await axios.get("https://my.api.mockaroo.com/videos?key=3d177a80");
    dispatch({
      type:'LOAD',
      payload:resp.data
    })
  }

  function editVideo(id) {
    setEditableVideo(videos.find((video) => video.id === id));
  }

  return (
    <ThemeContext.Provider value={mode}>
      <VideosContext.Provider value={videos}>
        <VideoDispatchContext.Provider value={dispatch}>
        <div className={`App ${mode}`} onClick={() => console.log('App')}>
         <Counter></Counter>
          <button
            onClick={() =>
              setMode(mode === 'darkMode' ? 'lightMode' : 'darkMode')
            }
          >
            Mode
          </button>
          <AddVideo
            editableVideo={editableVideo}
          ></AddVideo>
          <VideoList
            editVideo={editVideo}
          ></VideoList>
        </div>
        </VideoDispatchContext.Provider>
      </VideosContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
