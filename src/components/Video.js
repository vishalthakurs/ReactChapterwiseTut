import './Video.css';

function Video({title,channel="Coder Dost",views,time,verified}) {
  return (
      <>
      <div className='container'>
      <div className="pic">
      <img src="https://i.imgur.com/yXOvdOSs.jpg" alt="Katherine Johnson" />
      </div>
      <div className="title">{title}</div>
      {/* {verified?<div className="channel">{channel}✔</div>:<div className="channel">{channel}</div>} */}
      <div className="channel">{channel} {verified && '✔'}</div>
      
      <div className="views">
        {views} views <span>.</span> {time}
      </div>
      </div>
      </>
  );
}

export default Video;
