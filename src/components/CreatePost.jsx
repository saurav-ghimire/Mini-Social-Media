import { useContext, useRef } from "react";
import { postList } from "../store/post-list-store";

function CreatePost() {

  const { addPost } = useContext(postList);
  

  const userIDElement = useRef();
  const titleElement = useRef();
  const bodyElement = useRef();
  const reactionElement = useRef();
  const tagsElement = useRef();
  
  const handleSubmit = (event) => {
    event.preventDefault();

    const userID = parseInt(userIDElement.current.value);
    const title = titleElement.current.value;
    const body = bodyElement.current.value;
    const reaction = reactionElement.current.value;
    const allTags = tagsElement.current.value;
    const finalTags = allTags.split(" ");

    userIDElement.current.value = "";
    titleElement.current.value = "";
    bodyElement.current.value = "";
    reactionElement.current.value = "";
    tagsElement.current.value = "";
  
    fetch('https://dummyjson.com/posts/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      userId: userID,
      title: title,
      body: body,
      reactions: reaction,
      tags: finalTags
    })
  })
  .then(res => res.json())
  .then(post => addPost(post));
  }

  return <>
      <form className="create-post" onSubmit={handleSubmit}>
        <div className="mb-3">
          {/* User ID */}
          <label htmlFor="userid" className="form-label">User ID</label>
          <input 
            type="text" 
            className="form-control" 
            id="userid" 
            aria-describedby="userHelp" 
            placeholder="Enter Your User ID Here" 
            ref={userIDElement}
          />
        </div>
        <div className="mb-3">
          {/* Title */}
          <label htmlFor="title" className="form-label">Title</label>
          <input 
            type="text" 
            className="form-control" 
            id="title" 
            aria-describedby="titleHelp" 
            placeholder="Enter Your Email Here" 
            ref={titleElement}
          />
        </div>
        <div className="mb-3">
          {/* Post Content */}
          <label htmlFor="body" className="form-label">Post Content</label>
          <textarea 
            name="body" 
            id="body" 
            cols="30" 
            rows="5" 
            className="form-control" 
            placeholder="Enter Your Content Here" 
            ref={bodyElement}
          ></textarea>
        </div>
        <div className="mb-3">
          {/* Number of Reactions */}
          <label htmlFor="reaction" className="form-label">Number of Reactions</label>
          <input 
            type="text" 
            className="form-control" 
            id="reaction" 
            aria-describedby="reactionHelp" 
            placeholder="Enter the number of reactions you want on the post" 
            ref={reactionElement}
          />
        </div>
        <div className="mb-3">
          {/* Tags */}
          <label htmlFor="tags" className="form-label">Tags</label>
          <input 
            type="text" 
            className="form-control" 
            id="tags" 
            placeholder="Enter Your Tags Here"
            ref={tagsElement}
          />
        </div>
        <button type="submit" className="btn btn-primary">Post</button>
      </form>

  </>;
}

export default CreatePost;