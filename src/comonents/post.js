import React from 'react'
import "../styles/post.css"
import {Avatar} from "@material-ui/core"
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";


function post(  {displayName,
    username,
    verified,
    text,
    image,
    avatar}) {
  

    return (
        <div className="post">
            <div className="post_avatar">
                <Avatar src="https://pbs.twimg.com/profile_images/1412068853656346625/GnSAUqIc_400x400.jpg"/>
            </div>
            <div className="post_body">
                <div className="post_header">
                    <div className="post_header_text">
                        <h3>Abhishek Chauhan { " "}
                         <span className="post_headerSpecial"><VerifiedUserIcon className="post_badge" /></span></h3>
                    </div>
                    <div className="post_headerDesc">
                    <p>I'm building twitter</p>
                </div>
            </div>
            <img src="https://boomsumo.com/wp-content/uploads/2021/05/45-Best-You-Da-Best-Memes-Youre-The-Best-Meme-1.jpg" alt="meme"/>
            <div className="post_footer">
            <ChatBubbleOutlineIcon fonstSize="small" />
            <RepeatIcon fonstSize="small" />
            <FavoriteBorderIcon fonstSize="small" />
            <PublishIcon fonstSize="small" />
                </div>
               

            </div>
        </div>
    )
}

export default post
