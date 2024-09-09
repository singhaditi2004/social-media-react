import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});
const postListReducer = (currentPostList, action) => {
  return currentPostList;
};
const PostListProvier = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );
  const addPost = () => {};
  const deletePost = () => {};
  return (
    <PostList.Provider
      value={{ postList: postList, addPost: addPost, deletePost: deletePost }}
    >
      {children}
    </PostList.Provider>
  );
};
const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Mumbai",
    content: "Mumbai meri jaan",
    react: 1,
    userId: "999",
    tags: ["vication", "Mumbai", "enjoy"],
  },
  {
    id: "2",
    title: "Delhi",
    content: "Delhi dil valo ki",
    react: 12,
    userId: "189",
    tags: ["vication", "Delhi", "enjoy"],
  },
];
export default PostListProvier;
