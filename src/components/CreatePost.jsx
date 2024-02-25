import { useContext, useRef } from "react";
import { postList } from "../store/post-list-store";

function CreatePost() {

  const {addPost} = useContext(postList)


  const postID = useRef();
  const userID = useRef();
  const postTitle = useRef();
  const body = useRef();
  const tags = useRef();
  const reactions = useRef();
  
  const afterSubmit = (event) => {
  
    event.preventDefault();
    const postIdValue = postID.current.value;
    const postUserId = userID.current.value;
    const postPostTitle = postTitle.current.value;
    const postBody = body.current.value;
    const postTags = tags.current.value;
    const allTags = postTags.split(' ');
    const postReactions = reactions.current.value;
    const toPost = {
        id: postIdValue,
        userId: postUserId,
        title: postPostTitle,
        body: postBody,
        tags: allTags,
        reactions: postReactions
    }
    
    addPost(toPost);

    postID.current.value = '';
    userID.current.value = '';
    postTitle.current.value = '';
    body.current.value = '';
    tags.current.value = '';
    reactions.current.value = '';
  }
  return <>
  <div className="custom-form">
  <h2>Create Post</h2>
  <form onSubmit={afterSubmit}>
  <div className="mb-3">
    <label htmlFor="id" className="form-label">ID</label>
    <input type="text"
    className="form-control"
    ref={postID}
    id="id"
    name="id" />
  </div>
  <div className="mb-3">
    <label htmlFor="userID" className="form-label">UserID</label>
    <input type="text" 
    className="form-control"
    id="userID"
    ref={userID}
    name="userID" />
  </div>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Title</label>
    <input 
    type="text"
    className="form-control"
    id="title"
    ref={postTitle}
    name="title"
    />
  </div>
  <div className="mb-3">
    <label htmlFor="body" className="form-label">Body</label>
    <textarea
    className="form-control"
    id="body"
    ref={body}
    name="body"></textarea>
  </div>
  <div className="mb-3">
    <label htmlFor="reactions" className="form-label">Reactions</label>
    <input 
    type="text"
    className="form-control"
    id="reactions"
    ref={reactions}
    name="reactions"
    />
  </div>
  <div className="mb-3">
    <label htmlFor="tags" className="form-label">Tags</label>
    <input type="text"
    className="form-control"
    id="tags"
    ref={tags}
    name="tags" />
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
  </div>

  </>;
}

export default CreatePost;