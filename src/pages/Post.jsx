import React from 'react'
import { useParams } from 'react-router-dom';
import {useEffect,useState} from 'react';
import Axios from 'axios';
function Post() {
    let {postId} = useParams();
    const [post,setPost] = useState({})
    useEffect(() => {
      Axios.get(`http://localhost:3001/api/getFromId/${postId}`).then((data) => {
        let cooked_data = {title:data.data[0].title,postText:data.data[0].post_text,userName:data.data[0].user_name};
        setPost(cooked_data)
      });
    },[])
    return (
        <>
            <div className='Post SinglePost'>
                <h1>{post.title}</h1>
                <p>{post.postText}</p>
                <h4>{post.userName}</h4>
            </div>
        </>
    )
}

export default Post