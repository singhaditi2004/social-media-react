import { useState } from "react";
import "./App.css";
import CreatePost from "./Components/CreatePost";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import PostList from "./Components/PostList";
import SideBar from "./Components/SideBar";
import PostListProvier from "./Components/Post-List-Store";

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
          {selectedState == "home" ? (
            <PostList></PostList>
          ) : (
            <CreatePost></CreatePost>
          )}

          <Footer></Footer>
        </div>
      </div>
    </PostListProvier>
  );
}

export default App;
