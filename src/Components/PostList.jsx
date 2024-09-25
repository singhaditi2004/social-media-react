import Card from "./Card";
import { PostList as PostListData } from "./Post-List-Store";
import { useContext } from "react";
import WelcomeMessage from "./WelcomeMessage";
import LoadingSpinner from "./LoadingSpinner";
const PostList = () => {
  const { postList, fetching } = useContext(PostListData);

  return (
    <div>
      {fetching && <LoadingSpinner />}
      {!fetching && postList.length === 0 && <WelcomeMessage />}
      {postList.map((post) => (
        <Card key={post.id} post={post} />
      ))}
    </div>
  );
};
export default PostList;
