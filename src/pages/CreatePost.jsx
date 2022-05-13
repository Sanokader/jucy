import React, {useState } from 'react';
import Axios from 'axios';
import '../App.css';
function CreatePost() {
  const [userName, setUserName] = useState("");
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const submitPost = () => {
    Axios.post('http://localhost:3001/api/create', 
    { userName: userName, 
      title: title,
      text: text }).then((res) => {
        console.log(res);
      }).catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className='CreatePost'>
      <div className='uploadPost'>
        <label>Username</label>
        <input type="text" onChange={(e) => {
          setUserName(e.target.value);
        }} />
        <label>Title</label>
        <input type="text" onChange={(e) => {
          setTitle(e.target.value);
        }} />
        <label>Post</label>
        <textarea onChange={(e) => {
          setText(e.target.value);
        }}></textarea>
        <button onClick={submitPost}>Submit</button>
      </div>
    </div>
  )
}

export default CreatePost