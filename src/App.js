import SideBar from "./components/sideBar";
import "./App.css";
import Feed from "./components/feed";
import Widgets from "./components/widgets";
import Login from "./components/Login";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";


function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <>
          <SideBar />
          <Feed />
          <Widgets />
        </>
      )}
    </div>
  );
}

export default App;
