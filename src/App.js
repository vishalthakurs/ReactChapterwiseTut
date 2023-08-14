import { useState } from 'react';
import './App.css';


import data from './data/data';
import AddVideo from './components/AddVideo';
import VideoList from './components/VideoList';
function App() {
  const [videos,setVideos]=useState(data);

    function addVideos(video)
    {
      setVideos([...videos,{...video,id:videos.length+1}])
      console.log(videos);
    }

  
  return (
    <div className="App" onClick={()=>console.log('App')}>
      <AddVideo addVideos={addVideos}/>

     <VideoList videos={videos}/>
      
      
    </div>
  );
}

export default App;