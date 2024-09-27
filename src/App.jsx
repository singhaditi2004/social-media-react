import { useState } from "react";
import "./App.css";
import CreatePost from "./Components/CreatePost";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import PostList from "./Components/PostList";
import SideBar from "./Components/SideBar";
import PostListProvier from "./Components/Post-List-Store";
import { Outlet } from "react-router-dom";
function App() {
  const [selectedState, setSelectedState] = useState("createPost");
  return (
    <PostListProvier>
      <div className="container-app">
        <SideBar
          selectedState={selectedState}
          setSelectedState={setSelectedState}
        ></SideBar>
        <div className="content">
          <Header></Header>
          <Outlet />
          <Footer></Footer>
        </div>
      </div>
    </PostListProvier>
  );
}

export default App;
