import Video from "./components/Video";
import './App.css'
function App(){
  return ( 
  <div className="App">
      Hello This is App
      <Video title="React Js Tutorials" tutor="Vishal" views="19.2M" time={Date.now} />
      <Video title="Node Js Tutorials" tutoe="Janny" views="19.2M" time={Date.now}  />
  </div>
  )

}

export default App;