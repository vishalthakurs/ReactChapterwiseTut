import { useState } from 'react';
import './App.css';


import data from './data/data';
import AddVideo from './components/AddVideo';
import VideoList from './components/VideoList';
function App() {
  const [videos,setVideos]=useState(data);
  const [editableVideo,setEditableVideo]=useState(null);


    function addVideos(video)
    {
      setVideos([...videos,{...video,id:videos.length+1}])
      console.log(videos);
    }
    
    function deleteVideo(id)
    {
      setVideos(videos.filter(vid=>vid.id!==id));
    }
    function editVideo(id)
    {
        setEditableVideo(videos.find(v=>v.id===id))
    }
    function updatableVideo(video)
    {
        const index=videos.find(v=>v.id===video.id);
        const newVideos=[...videos];
        newVideos.splice(index,1,video);
        setVideos(newVideos)
    }

  
  return (
    <div className="App" onClick={()=>console.log('App')}>
      <AddVideo addVideos={addVideos} editableVideo={editableVideo} updatableVideo={updatableVideo}/>

     <VideoList videos={videos} deleteVideo={deleteVideo} editVideo={editVideo} />
      
      
    </div>
  );
}

export default App;