import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
  addPosts: () => {},
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
  if (action.type === "ADD_POSTS") {
    updatedPostList = action.payload.posts.map((post) => ({
      ...post,
      react: post.reactions.likes,
      content: post.body, // Store only likes
    }));
  }
  return updatedPostList;
};
const PostListProvier = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);
  const addPost = (post) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: post,
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
  const addPosts = (posts) => {
    dispatchPostList({
      type: "ADD_POSTS",
      payload: {
        posts,
      },
    });
    console.log(posts);
  };
  return (
    <PostList.Provider
      value={{
        postList: postList,
        addPost: addPost,
        deletePost: deletePost,
        reactToPost: reactToPost,
        addPosts: addPosts,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

export default PostListProvier;
