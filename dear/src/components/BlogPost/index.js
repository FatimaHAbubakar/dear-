import React from 'react';
import { Card } from '../UI/Card';
import './style.css';
import { useEffect, useState } from 'react';
import blogPost from '../../Data/Blog.json'
/**
* @author
* @function BlogPost
**/

export const BlogPost = (props) => {
/**to render continuosly and load different posts we use usestate and to avoid rewriting code
 * //the dollar sign and backticks is a way of writing variables into strings**/
    const[post, setPost]= useState({
             id:"",
             blogCategory: "",
             blogTitle:"", 
             postedOn : "",
             author: "",
             blogImage: "",
             blogText:"",
    });
    const[constId,setPostId]= useState("");
   
   useEffect(() => {
    const postId = props.match.params.postId;
    const post = blogPost.data.find(post => post.id === postId);
    setPost(post);
    setPostId(postId);
   },
   [post, props.match.postId]);

   if(post.blogImage == "") return null;


  return(
     <div className='blogPostContainer'>
        <Card>
            <div className='blogHeader'>
          <span className='blogCategory'>{post.blogCategory}</span> 
            <h1 className='postTitle'>{post.blogTitle}</h1>
            <span className='postedBy'>{post.postedOn} by {post.author}</span>
            </div>


 
            <div className='postImageContainer'>
                
                <img src={require(`"../../Assets/images/${post.blogImage}"`)} alt='post image'/>

            </div>

            <div className='postContent'> 
                <h3>{post.blogTitle}</h3>
                <p>{post.blogText}
                </p>
            </div>
        </Card>
        </div>
    
   )

 }
 export default BlogPost 