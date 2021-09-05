import React from "react";
import "../styles/widgets.css";
import SearchIcon from "@material-ui/icons/Search";
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwitterTweetEmbed,
  } from "react-twitter-embed";

function widgets() {
  return (
    <div className="widgets">
      <div className="widgets_input">
        <SearchIcon className="widgets_searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>
      <div className="widgets_container">
      <h2>What's happening</h2>
      <TwitterTweetEmbed tweetId={"1416018610397474823"}/>
      </div>
      
      {/* <TwitterTimelineEmbed sourceType="profile" screenName="abhi" options={{height:400}}/>   */}

    </div>
  );
}

export default widgets;
