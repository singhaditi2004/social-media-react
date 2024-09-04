import "./App.css";
import Card from "./Components/Card";
import CreatePost from "./Components/CreatePost";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import PostList from "./Components/PostList";
import SideBar from "./Components/SideBar";

function App() {
  return (
    <div className="container-app">
      <SideBar></SideBar>
      <div className="content">
        <Header></Header>
        <CreatePost></CreatePost>
        <Card></Card>
        <PostList></PostList>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
