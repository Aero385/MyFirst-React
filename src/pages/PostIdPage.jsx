import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostService from '../API/PostService';
import { useFetching } from '../hooks/useFetching';

const PostIdPage = () => {

    const params = useParams()
    const [post, setPost] = useState(null)
    const [fetchPostById, isLoading, error] = useFetching(async() => {
        const response = await PostService.getById(params.id)
    })
    useEffect(() => {

    })
    return (
        <div>
            <h1>You opened post page with ID = {params.id}</h1>
        </div>
    );
}

export default PostIdPage;