import SideBar from "./comonents/sideBar";
import './App.css';
import Feed from "./comonents/feed";
import Widgets from "./comonents/widgets";



function App() {
  return (
    <div className="app">
    <SideBar />
    <Feed/>
    <Widgets/>

  

    </div>
  );
}

export default App;
