import { useReducer, useState } from 'react';
import './App.css';


import data from './data/data';
import AddVideo from './components/AddVideo';
import VideoList from './components/VideoList';
function App() {

  const [editableVideo,setEditableVideo]=useState(null);
  function videoReducer(videos,action)
  {
      switch(action.type)
      {
        case 'ADD':
        return ([...videos,{...action.payload,id:videos.length+1}])

        case 'DELETE':
        return videos.filter(vid=>vid.id!==action.payload)

        case 'UPDATE':
          let index=videos.findIndex(v=>v.id===action.payload.id)
          const newVideos=[...videos]
          newVideos.splice(index,1,action.payload)
          setEditableVideo(null)
          return newVideos

        default:
          return videos;
      }
  }
  //const [videos,setVideos]=useState(data);
  
  const [videos,dispatch]=useReducer(videoReducer,data)
  //const [editableVideo,setEditableVideo]=useState(null);

    // function addVideos(video)
    // {
    //   dispatch({
    //     type:'ADD',
    //     payload:video
    //   })
    //   //setVideos([...videos,{...video,id:videos.length+1}])
    //   //console.log(videos);
    // }
    // function deleteVideo(id)
    // {
    //   dispatch({
    //     type:'DELETE',
    //     payload:id
    //   })
    // }
    function editVideo(id)
    {
      setEditableVideo(videos.find(v=>v.id===id))
    }
    // function updateVideo(video)
    // {
    //   // let index=videos.findIndex(v=>v.id===video.id);
    //   // const newVideos=[...videos];
    //   // newVideos.splice(index,1,video);
    //   // //setVideos(newVideos);
    //   dispatch({
    //     type:'UPDATE',
    //     payload:video
    //   })

    // }

  
  return (
    <div className="App" onClick={()=>console.log('App')}>
      <AddVideo dispatch={dispatch} editableVideo={editableVideo} />

     <VideoList videos={videos} dispatch={dispatch} editVideo={editVideo} />
      
      
    </div>
  );
}

export default App;