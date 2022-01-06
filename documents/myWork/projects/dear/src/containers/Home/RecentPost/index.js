import React from 'react';
import './style.css';
import Card from '../../../components/UI/Card';

/**
* @author
* @function RecentPost

**/

export const RecentPost
 = (props) => {
  return(
      <div>
    <div style={props.style}>
    <Card style={{ marginBottom: '20px 0' }}>
        <div className="postImageWrapper">
        <img alt="post" src={'../../images/nightcrawler.jpg'} />

        </div>
        <div style={{textAlign: 'center'}}>
            <span>Featured </span>
            <h2>Dear Nighttime Crawler,</h2>
            <span>Posted on January 7,2021 by Jamila</span>
            <button>Read Now</button>
        </div>
        


    </Card>
</div>




</div>
   )

 }
