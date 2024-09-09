import Card from "./Card";
import { PostList as PostListData } from "./Post-List-Store";
import { useContext } from "react";
const PostList = () => {
  const { postList } = useContext(PostListData);
  return (
    <div>
      <h1>Post List</h1>
      {postList.map((post) => (
        <Card key={post.id} post={post} />
      ))}
    </div>
  );
};
export default PostList;
