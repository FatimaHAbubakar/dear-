import React from 'react';
import SideBar from '../../components/SideBar';
import Card from '../../components/UI/Card';
import { RecentPost } from './RecentPost';

import './style.css';
import blogData from '../../Data/Blog.json';


const SideImage = props => {
    return(
     <div style={{ height: `${props.Height}px` }}>
        <img alt='post' src={props.src} />
    </div>
    )
}



export const Home = props => {
const galleryHeight = 450;
const galleryStyle = {
    height: galleryHeight + 'px',
    overflow: 'hidden'
}
const sideImageHeight = galleryHeight/2;
const imgArray = blogData.blog.map(post => post.blogImage)
console.log(blogData)

    return(
        <div>
            <Card>
            <div className='galleryPost'>

<section style={{ width: '70%' }}>
    <div className='mainImagewrapper'>
        <img alt='post' src={'./media/images', props.imgArray[0]} />
    </div>
</section>
<section className='sideImageWrapper' style={{ width: '29%' }}>
    <SideImage height={props.sideImageHeight}
        src={'./media/images', props.imgArray[1]} alt="" />

</section>
</div>;
            
              
                
    
            </Card>
    
    <section className='homeContainer'>
      <RecentPost style={{width:'70%'}}/>   
      <SideBar/>      
 </section>
</div>

    );



    }
export default Home