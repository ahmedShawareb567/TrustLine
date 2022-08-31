import { Link } from "react-router-dom";

export const AppPost = ({ post }: any) => {
  return (
    <>
      <div className="appPost">
        <Link to={`/posts/${post.id}`} className="appPost-url"></Link>
        <h3 className="fs-md text-primary">{post.title}</h3>
        <p className="fs-sm fw-medium">{post.body}</p>
      </div>
    </>
  );
};
