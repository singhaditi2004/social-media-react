import { MdDelete } from "react-icons/md";
import { useContext } from "react";
import { PostList } from "./Post-List-Store";
const Card = ({ post }) => {
  const { deletePost, reactToPost } = useContext(PostList);
  return (
    <div className="card post-card" style={{ width: "28rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => deletePost(post.id)}
          >
            <MdDelete />
          </span>
        </h5>
        <p className="card-text">{post.content}</p>
        {post.tags.map((tag) => (
          <span key={tag} className="badge text-bg-primary hashtag">
            {tag}
          </span>
        ))}
        <div className="alert alert-info reaction" role="alert">
          Total reactions: {post.react}
        </div>
        <button
          type="button"
          className="btn btn-outline-primary m-2"
          onClick={() => reactToPost(post.id)}
        >
          React
        </button>
      </div>
    </div>
  );
};
export default Card;
