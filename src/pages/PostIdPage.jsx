import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostService from '../API/PostService';
import Loader from '../components/UI/Loader/Loader';
import { useFetching } from '../hooks/useFetching';

const PostIdPage = () => {

    const params = useParams()
    const [post, setPost] = useState({})
    const [comment, setComment] = useState([])
    const [fetchPostById, isLoading, error] = useFetching(async(id) => {
        const response = await PostService.getById(id)
        setPost(response.data)
    })

    const [fetchComments, isComLoading, comError] = useFetching(async(id) => {
        const response = await PostService.getCommentsByPostId(id)
        setComment(response.data)
    })

    useEffect(() => {
        fetchPostById(params.id)
        fetchComments(params.id)
    }, []
    )
    return (
        <div>
            <h1>You opened post page with ID = {params.id}</h1>
            { isLoading 
                ? <Loader/>
                : <div>{post.id}. {post.title}</div> 
            }
            <h1>
                Comments
            </h1>
            {isComLoading
            ? <Loader/>
            : <div>
                {comment.map(com => 
                    <div key={com.id} style={{marginTop: '15px'}}>
                        <h5>{com.email}</h5>
                        <div>{com.body}</div>
                    </div>
                )}
              </div>
            }
        </div>
    );
}

export default PostIdPage;