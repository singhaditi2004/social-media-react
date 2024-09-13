import Card from "./Card";
import { PostList as PostListData } from "./Post-List-Store";
import { useContext } from "react";
import WelcomeMessage from "./WelcomeMessage";
const PostList = () => {
  const { postList } = useContext(PostListData);
  return (
    <div>
      {postList.length === 0 && <WelcomeMessage />}

      <h1>Post List</h1>
      {postList.map((post) => (
        <Card key={post.id} post={post} />
      ))}
    </div>
  );
};
export default PostList;
