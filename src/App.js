import './App.css';
import Video from './components/Video';

function App() {
  let data = [{
    id:"1",
    title: 'React JS tutorial',
    views: '999K',
    time: '1 year ago',
    channel: 'Vishal Dev',
    verified:"false"
  },
  {
    id:"2",
    title: 'Node JS tutorial',
    views: '100K',
    time: '1 month ago',
    channel: 'Vishal Dev',
    verified:"false"
  },
  {
    id:"3",
    title: 'Mongo DB tutorial',
    views: '1M',
    time: '1 year ago',
    channel: 'Vishal Dev',
    verified:"false"
  }];
  return (
    <div className="App">
      <div>Videos</div>
      {
        data.map(ele=><Video
          key={ele.id}
          title={ele.title}
          views={ele.views}
          time={ele.time}
          channel={ele.channel}
          verified={ele.verified} />)
      }
    </div>
  );
}

export default App;
