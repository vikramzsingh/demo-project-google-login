import axios from 'axios';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postUserData } from '../redux';

const PostFormData = () => {
    const [post, setPost] = useState({});
    const postData = useSelector((state => state.post))
    const dispatch = useDispatch()

    const handleChange = (e) => {
        // console.log(e.target)
        setPost({ ...post, [e.target.name]: e.target.value })
    }
    // console.log(post)

    const handleClick = async (e) => {
        e.preventDefault();
        await axios.post('https://jsonplaceholder.typicode.com/posts', { post })
            .then((res) => {
                console.log(res.data)
                dispatch(postUserData(post))
            })
            .catch((error) => {
                console.log(error)
                dispatch(postUserData(error))
            })
        // dispatch(postDataAction(post))
    }

    return (
        <div>
            <h4>Post Data:-</h4>
            <form>
                <div>
                    <label htmlFor="userId">User Id</label>
                    <p></p>
                    <input type="text" name="userId" onChange={handleChange} />
                </div>
                <br />
                <div>
                    <label htmlFor="title">Title</label>
                    <p></p>
                    <input type="text" name="title" onChange={handleChange} />
                </div>
                <br />
                <div>
                    <label htmlFor="body">Body</label>
                    <p></p>
                    <textarea rows="4" cols="31" type="text" name="body" onChange={handleChange} />
                </div>
                <br />
                <button onClick={handleClick}>Post Data</button>
            </form>
            <div>
                {postData && <h3>Data Sended:-</h3>}
                {postData.posts.userId}
                <br />
                {postData.posts.title}
                <br />
                {postData.posts.body}
            </div>
        </div>
    );
}

export default PostFormData;
