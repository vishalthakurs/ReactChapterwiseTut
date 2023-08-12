import './Video.css'

const Video=({title,tutor,views,time})=>{

    let styling={
        bg:'pink',
        col:'green'
    }
    return (
    // <div className="container">
    //  <div className="pic">
    //  <img src="https://i.imgur.com/MK3eW3As.jpg"  alt="Katherine Johnson" />
    // <div className="title" style={{background:'red'}}>{title}</div>
    // <div className='tutor'style={{background:styling.bg,color:styling.col}}>{tutor}</div>
    //  </div>
    


    // </div>

    <>
    <div className='container'>
    <div className="pic">
    <img src="https://i.imgur.com/MK3eW3As.jpggit" alt="Katherine Johnson" />
    </div>
    <div className="title">{title}</div>
    <div className="channel">{tutor}</div>
    <div className="views">
      {views} views <span>.</span> {time}
    </div>
    </div>
    </>
    )
}
export default Video;