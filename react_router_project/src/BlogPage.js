import React from "react";
import { Link,Outlet } from "react-router-dom";
import { blogData } from "./blogData";
const BlogPage = () =>{
    return(
        <>
            <h1>Blog page</h1>
            <Outlet/>
            <lu>
                {blogData.map(post =>(
                    <BlogLink post={post} key={post.slug}/>                
                ))}
            </lu>
        </>
        
    )
}

const BlogLink = ({post}) => {
     return (
        <li>
            <Link to={`/blog/${post.slug}`}>{post.title}</Link>
        </li>
     )
}



export default BlogPage;