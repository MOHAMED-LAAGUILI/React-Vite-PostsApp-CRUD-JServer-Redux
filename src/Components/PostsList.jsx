import Loader from "./Loader/Loader";
import { postApi } from "../app/Service Api/postApi";
import "bootstrap/dist/css/bootstrap.css";
const PostsList = () => {
  const {
    data: posts,
    isLoading,
    isError,
    error,
  } = postApi.endpoints.getAllPosts.useQuery();

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <div>{error}</div>;
  }

  return (
    <>
      {posts.map((post) => (
        <div key={post.id}>
          <p>Posts</p>
          <div className="bg-dark text-light fw-bolder p-2 w-100 text-center rounded-pill my-2">
            <a href="#" className="list-group-item list-group-item-action ">
              {post.id}- {post.title}
            </a>
          </div>
        </div>
      ))}
    </>
  );
};

export default PostsList;
