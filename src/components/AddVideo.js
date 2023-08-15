import React, { useEffect, useState } from 'react'
import './AddVideo.css'

const initialState={
    title:'',
    views:'',
    time:'1 month ago',
    channnel:'dev vishal',
    verified:true,

}

const AddVideo = ({dispatch,editableVideo}) => {
    // const [title,setTitle]=useState();
    // const [views,setViews]=useState(0);


    const initialState={
        title: '',
        views: '',
        time: '1 month ago',
        channel: 'Vishal Dev',
        verified:"true"
    }
    const [video,setVideo]=useState(initialState);
    useEffect(()=>{
      if(editableVideo)
      {
        setVideo(editableVideo);
      }
    },[editableVideo])

    function handleChange(e)
    {
       setVideo({...video,[e.target.name]:e.target.value})
       console.log(video)
        
    }
    function handleSubmit()
    {
      if(editableVideo)
      {
        dispatch({
          type:'UPDATE',
          payload:video
        })
        
      }
      else{
        dispatch({
          type:'ADD',
          payload:video
        })
      }
        
        setVideo(initialState);
        
    }
  return (
    <form onSubmit={(e)=>e.preventDefault()}>
      <input type="text"  placeholder='title' onChange={handleChange} name='title' value={video.title}/>
      <input type="text" placeholder='views'onChange={handleChange} name='views' value={video.views}/>
      <button onClick={handleSubmit}>{editableVideo?'Edit':'Add'} Video</button>
    </form>
  )
}

export default AddVideo
