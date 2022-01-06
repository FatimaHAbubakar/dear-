import React from 'react';
import './style.css';
import BlogPost from '../../components/BlogPost';
import SideBar from '../../components/SideBar';

/**
* @author
* @function Post

**/

export const Post  = (props) => {
    console.log(props);


  return(
    <section className='postContainer'>
        <BlogPost {...props}/>
        <SideBar/>
    </section>
   )

 }
 export default Post;