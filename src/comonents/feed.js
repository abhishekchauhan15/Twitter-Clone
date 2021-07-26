import React from 'react';
import "../styles/feed.css"
import TweetBox from './tweetBox';
import Post from './post';




function feed() { 
    return (
        <div className="feed">
        {/* Header */}
        <div className="feed_header">
        <h2>Home</h2>
         </div>


        {/* TweetBox */}
        <TweetBox/>

        {/* Post */}
        <Post/>
        
            
        </div>
    )
}

export default feed;

// rfce
