import React, { forwardRef } from "react";
import "../styles/post.css";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ShareIcon from "@material-ui/icons/Share";

const Post = forwardRef(
  ({ displayName, username, verified, text, image, avatar }, ref) => {
    return (
      <div className="post" ref={ref}>
        <div className="post_avatar">
          <Avatar src={avatar} />
        </div>
        <div className="post_body">
          <div className="post_header">
            <div className="post_header_text">
              <h3>
                {displayName}{" "}
                <span className="post_headerSpecial">
                  {verified && <VerifiedUserIcon className="post_badge" />}@
                  {username}
                </span>
              </h3>
            </div>
            <div className="post_headerDesc">
              <p>{text}</p>
            </div> 
          </div>
          <img src={image} alt="" />
          <div className="post_footer">
            <ChatBubbleOutlineIcon fonstSize="small" class="icon comment" />
            <RepeatIcon fonstSize="small" class="icon retweet" />
            <FavoriteBorderIcon fonstSize="small" class="icon like" />
            <ShareIcon fonstSize="small" class="icon share" />
          </div>
        </div>
      </div>
    );
  }
);

export default Post;
