import React from 'react';
import Card from '../UI/Card';
import './style.css';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import BlogPost from '../BlogPost';

/**
* @author
* @function SideBar

**/

export const SideBar
 = (props) => {

    const[Posts, setPost]= useState([]);

   
    useEffect(() => {
     //const Posts = blogPost.data;
     setPost(Posts);
    },
    [Posts]);
 


  return(
      <div className='sideBarContainer' style={{width: props.width}}>
    <Card style={{marginbottom: '10px', padding:'20px', boxsizing:'border-box'}}> 
        <div className='cardHeader'>
            <span>
              About Dear,  
            </span>
        </div>
        <div className='profileImageContainer'>
            <img alt='dear image' src='./media/images/aboutdear.jpg'/>

        </div>
        <div className='cardBody'>
        <p className='dearBio'>Dear, blog is a handy online blog that provides its readers with handy tips and tricks.
            it takes the form of the old letter writing style and provides a more personal experience to its users.
        </p>
        </div>
    </Card>

    <Card> 
        <div className='cardHeader'>
            <span>
             <div className='Ig'>
              <img className='searchIcon' src='./media/icons/socialmedia.png'alt="instagram"/>
            </div>
            </span>
        </div>
    </Card>

    <Card style={{marginbottom: '10px', padding:'20px', boxsizing:'border-box'}}>
        <div  className='cardHeader'>
        <span> Recent Posts</span>
        </div>

        <div className='recentPosts'>
            {
                Posts.map(post =>{

                    return(
                         <NavLink key={post.ID}  to={`'/post/${post.id}'`}>
                         <div className='recentPost'>
                           <h3 >{post.blogTitle}</h3>
                           <span>{post.postedOn}</span>
                         </div>
                         </NavLink>
                    );
                }
                    )
            }



        </div>


        
    </Card>
    </div>
   )

 }
 export default SideBar