import { postList } from "../store/post-list-store";
import Post from "./Post";
import { useContext } from "react";

function ListPost() {
  const data = useContext(postList);

  // Check if data.PostLists is undefined or null
  if (!data || !data.PostLists) {
    return <p>Loading...</p>; // or some other loading state/component
  }

  // Ensure to return the mapped array
  return (
    <>
      <div className="title-wrapper">
      <h2>Our Post</h2>
      </div>
      {data.PostLists.map((post) => (
        <Post key={post.id} value={post} />
      ))}
    </>
  );
}

export default ListPost;
