import Card from "./Card";
import { PostList as PostListData } from "./Post-List-Store";
import { useContext } from "react";
import WelcomeMessage from "./WelcomeMessage";
const PostList = () => {
  const { postList, addPosts } = useContext(PostListData);
  const handleOnGetPostClicked = () => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addPosts(data.posts);
      });
  };
  return (
    <div>
      {postList.length === 0 && (
        <WelcomeMessage onGetPostClicked={handleOnGetPostClicked} />
      )}

      <h1>Post List</h1>
      {postList.map((post) => (
        <Card key={post.id} post={post} />
      ))}
    </div>
  );
};
export default PostList;
