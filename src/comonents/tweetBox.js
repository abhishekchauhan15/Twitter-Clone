import React,{useState} from 'react'
import "../styles/tweetBox.css"
import {Avatar, Button } from "@material-ui/core";
import db from "../firebase";


function TweetBox() {
    const [tweetMessage  , setTweetMessage] = useState("")
    const [tweetImage  , setTweetImage] = useState("")
    const sendTweet = e=> {
        e.preventDefault();

        db.collection("posts").add({
            displayName: "abhi",
            username: "abhishek",
            verified : false,
            text: tweetMessage,
            image: tweetImage,
            avatar:"https://pbs.twimg.com/profile_images/1412068853656346625/GnSAUqIc_400x400.jpg"

    });
    setTweetMessage("");
    setTweetImage("");

}
    return (
        <div className="tweetBox">
        <form>
            <div className="tweetBox_input">
            <Avatar src="https://pbs.twimg.com/profile_images/1412068853656346625/GnSAUqIc_400x400.jpg"/>
            <input
            onChange={(e)=>setTweetMessage(e.target.value)}
             value={tweetMessage} 
             placeholder="What's happening?"
             type="text"
             />
            </div>
            <input
            value={tweetImage} 
            className="tweetBox_imageInput" 
            placeholder="Enter the image URL" 
            type="text"
            onChange={(e)=>setTweetImage(e.target.value)}
            />

            <Button onClick={sendTweet} type="submit" class="tweetBox_tweetButton"> Tweet</Button>    
        </form>
        </div>
    )
}

export default TweetBox;
