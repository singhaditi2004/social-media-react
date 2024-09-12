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
  if (action.type === "INCREMENT_REACT") {
    updatedPostList = currentPostList.map((post) =>
      post.id === action.payload.idpost
        ? { ...post, react: post.react + 1 }
        : post
    );
  }
  if (action.type === "ADD_POST") {
    updatedPostList = [action.payload, ...currentPostList];
  }
  return updatedPostList;
};
const PostListProvier = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );
  const addPost = (post) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: post.title,
        content: post.content,
        react: post.react,
        userId: post.userId,
        tags: post.tags || [],
      },
    });
    console.log(post);
  };
  const deletePost = (idpost) => {
    console.log(`deleted ${idpost}`);
    dispatchPostList({ type: "DELETE_POST", payload: { idpost } });
  };
  const reactToPost = (idpost) => {
    dispatchPostList({ type: "INCREMENT_REACT", payload: { idpost } });
  };

  return (
    <PostList.Provider
      value={{
        postList: postList,
        addPost: addPost,
        deletePost: deletePost,
        reactToPost: reactToPost,
      }}
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
