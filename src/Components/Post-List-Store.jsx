import { createContext, useReducer } from "react";

const PostList = createContext({
  postList: [],
  dispatchPostList: () => {},
  addPost: () => {},
});
const postListReducer = (currentPostList, action) => {
  return currentPostList;
};
const PostListProvier = ({ children }) => {
  const addPost = () => {};
  const deletePost = () => {};
  const [postList, dispatchPostList] = useReducer(postListReducer, []);

  return (
    <PostList.Provider
      value={{ postList: postList, addPost: addPost, deletePost: deletePost }}
    >
      {children}
    </PostList.Provider>
  );
};
export default PostListProvier;
