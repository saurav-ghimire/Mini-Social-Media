import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { postList } from "../store/post-list-store";

function Post({post}) {
  const {deletePost} = useContext(postList);
  return <>
    <div className="card" style={{width: "18rem"}}>
    <span className="position-absolute top-0 start-100 translate-middle badge custom-badge rounded-pill bg-danger"
    onClick={() => {deletePost(post.id)}}
    ><MdDelete /></span>
    <div className="card-body">
      <h5 className="card-title">{post.title}</h5>
      <p className="card-text">{post.body}</p>
      
      {post.tags.map((data, index) => (
        <a key={index} className="custom-tags btn btn-primary">{data}</a> 
      ))}
      <div className="alert alert-success reactions" role="alert">
        Reaction : {post.reactions}
      </div>
    </div>
  </div>
  </>;
}

export default Post;