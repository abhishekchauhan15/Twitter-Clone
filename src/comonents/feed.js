import React from 'react';
import "../styles/feed.css"
import TweetBox from './tweetBox';
import Post from './post';
import Widgets from './widgets';




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
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>
        <Post/>


        <Widgets/>
        
            
        </div>
    )
}

export default feed;

// rfce
