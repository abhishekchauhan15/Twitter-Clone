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
                <Avatar src={avatar}/>
            </div>
            <div className="post_body">
                <div className="post_header">
                    <div className="post_header_text">
                        <h3>{displayName} { " "}
                         <span className="post_headerSpecial">
                         {verified &&<VerifiedUserIcon className="post_badge" />} @{username}</span></h3>
                    </div>
                    <div className="post_headerDesc">
                    <p>{text}</p>
                </div>
            </div>
            <img src={image} alt="meme"/>
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
