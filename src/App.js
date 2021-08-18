import SideBar from "./comonents/sideBar";
import './App.css';
import Feed from "./comonents/feed";
import Widgets from "./comonents/widgets";
import Login from "./comonents/Login";




function App() {
  return (
    <div className="app">
    <SideBar />
    <Feed/>
    <Widgets/>
    {/* <Login/> */}

  

    </div>
  );
}

export default App;
