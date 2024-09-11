import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});
const postListReducer = (currentPostList, action) => {
  let updatedPostList = currentPostList;
  if (action.type === "DELETE_POST") {
    updatedPostList = currentPostList.filter(
      (post) => post.id !== action.payload.idpost
    );
  }

  return updatedPostList;
};
const PostListProvier = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );
  const addPost = () => {};
  const deletePost = (idpost) => {
    console.log(`deleted ${idpost}`);
    dispatchPostList({ type: "DELETE_POST", payload: { idpost } });
  };
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
