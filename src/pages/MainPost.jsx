import React from 'react'
import Axios from 'axios';
import { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';

function MainPost() {
  const [postList, setPostList] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    Axios.get("http://localhost:3001/api/get").then((data) => {
      setPostList(data.data);
    })
  }, [])
  return (
    <div className='MainPage'>
      <div className='PostContainer'>
        {postList.map((value,key) => {
          return(
            <div className='Post' key={key} onClick={() => {
              navigate(`/post/${value.id}`)
            }}>
              <h1>{value.title}</h1>
              <p>{value.post_text.length > 300? value.post_text.substring(0,300)+"......" : value.post_text}</p>
              <h4>{value.user_name}</h4>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default MainPost;