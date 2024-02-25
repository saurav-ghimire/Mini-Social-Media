import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { postList } from "../store/post-list-store";

function Post({value}) {
  const {deletePost} = useContext(postList)
  
  return <>
    <div className="card custom-card">
    <span className="position-absolute top-0 start-100 translate-middle badge custom-badge rounded-pill bg-danger"
    onClick={() => {deletePost(value.id)}}
    ><MdDelete /></span>
    <div className="card-body">
      <h5 className="card-title">{value.title}</h5>
      <p className="card-text">{value.body}</p>
      
      {value.tags.map((data, index) => (
        <a key={index} className="custom-tags btn btn-primary">{data}</a> 
      ))}
      <div className="alert alert-success reactions" role="alert">
        Reaction : {value.reactions}
      </div>
    </div>
  </div>
  </>;
}

export default Post;