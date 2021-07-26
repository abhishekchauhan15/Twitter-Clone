import React from 'react'
import "../styles/tweetBox.css"
import {Avatar, Button } from "@material-ui/core";

function tweetBox() {
    return (
        <div className="tweetBox">
        <form>
            <div className="tweetBox_input">
            <Avatar src="https://pbs.twimg.com/profile_images/1412068853656346625/GnSAUqIc_400x400.jpg"/>
            <input placeholder="What's happening?"></input>
            </div>
            <input className="tweetBox_imageInput" placeholder="Enter the image URL" type="text"/>
            <Button class="tweetBox_tweetButton"> Tweet</Button>    
        </form>
        </div>
    )
}

export default tweetBox;
