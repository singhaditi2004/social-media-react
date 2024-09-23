import { useContext, useRef } from "react";
import { PostList } from "./Post-List-Store";

const CreatePost = () => {
  const { addPost } = useContext(PostList);
  const userId = useRef();
  const title = useRef();
  const tags = useRef();
  const content = useRef();
  const handleSubmit = (event) => {
    event.preventDefault();
    const post = {
      userId: userId.current.value,
      title: title.current.value,
      content: content.current.value,
      tags: tags.current.value.split(","),
      react: 0,
    };

    /*  userId.current.value = "";
    content.current.value = "";
    tags.current.value = "";
    title.current.value = "";*/
    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: post.title,
        content: post.content,
        react: post.react,
        userId: post.userId,
        tags: post.tags || [],
      }),
    })
      .then((res) => res.json())
      .then((resObj) => addPost(resObj));
  };
  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          User Id
        </label>
        <input
          type="text"
          ref={userId}
          className="form-control"
          id="userId"
          placeholder="Enter your User Id"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text"
          ref={title}
          className="form-control"
          id="title"
          placeholder="Enter your post title ..."
        />
      </div>

      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Enter post description
        </label>
        <textarea
          type="text"
          rows={5}
          ref={content}
          className="form-control"
          id="description"
          placeholder="Enter your post description ..."
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Tags
        </label>
        <input
          type="text"
          ref={tags}
          className="form-control"
          id="tags"
          placeholder="Enter tags"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};
export default CreatePost;
