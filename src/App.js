import './App.css';
import Video from './components/Video';
import data from './data/data';

function App() {
  
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
