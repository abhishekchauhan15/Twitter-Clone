import React from 'react';
import "../styles/widgets.css";
import SearchIcon from "@material-ui/icons/Search";
// import {
//     TwitterTimelineEmbed,
//     TwitterShareButton,
//     TwitterTweetEmbed,
//   } from "react-twitter-embed";

function widgets() {
    return (
        <div className='widgets'>
        <div className="widgets_input">
        <SearchIcon className="widgets_searchIcon"/>
        <input placeholder="Search Twitter" type="text"/>
        </div>
        <div className="widgets_container"></div>
        <h2>What's happening</h2>
        {/* <TwitterTweetEmbed tweetId={"https://twitter.com/reactify_in?s=20"}/> */}


            
        </div>
    )
}

export default widgets
