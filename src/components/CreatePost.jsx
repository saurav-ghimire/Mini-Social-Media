import { useContext, useRef } from "react";
import { postList } from "../store/post-list-store";
import { Form, useNavigate } from "react-router-dom";

function CreatePost() {

  // const { addPost } = useContext(postList);


  return <>
      <Form method="POST" className="create-post">
        <div className="mb-3">
          {/* Title */}
          <label htmlFor="title" className="form-label">Title</label>
          <input 
            type="text" 
            className="form-control" 
            id="title" 
            aria-describedby="titleHelp" 
            placeholder="Enter Your Email Here" 
            name="title"

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
            name="reactions"
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
            name="tags"
          />
        </div>
        <button type="submit" className="btn btn-primary">Post</button>
      </Form>

  </>;
}

export async function createPostAction(data) {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(" ");
  postData.id = Math.floor(Math.random() * 100) + 1;
  postData.userId = Math.floor(Math.random() * 100) + 1;
  console.log(postData)
  return fetch('https://dummyjson.com/posts/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(postData)
  })
  .then(res => res.json())
  .then((post) => {
    
    console.log(post);
    return post;
    
  });
}
export default CreatePost;