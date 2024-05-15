import React from "react";
import { useParams,useNavigate } from "react-router-dom";
import { blogData } from "./blogData";
const BlogPost = (post) =>{
    const navigate = useNavigate();
    const {slug}  = useParams();
    const blogPost = blogData.find(post => post.slug === slug);
    const returnToBlog = () => {
        navigate('/blog')
    }
    return (
        <> 
            <h2>{blogPost.title}</h2>
            <button onClick={returnToBlog}>volver al blog</button>
            <p>{blogPost.content}</p>
            <p>{blogPost.author} </p>
        </>
    )
}
export default BlogPost;