import './Video.css';

function Video({title,id,channel,views,time,verified,children,deleteVideo,editVideo}) {
  
   function delVideo(id)
   {
      
      deleteVideo(id);
   }
   function edVideo(id)
   {
      editVideo(id);
   }
    
  
  return (
      <>
      <div className='container'>
      <div className="pic">
      <button className='close' onClick={()=>delVideo(id)}>X</button>
      <button className='edit' onClick={()=>edVideo(id)}>Edit</button>

      <img src={`https://picsum.photos/id/${id}/160/90`} alt="Katherine Johnson" />
      </div>
      <div className="title">{title}</div>
      <div className="channel">{channel} {verified && '✅'} </div>
      <div className="views">
        {views} views <span>.</span> {time}
      </div>
      <div>
        {children}
      </div>
      </div>
      </>
  );
}

export default Video;