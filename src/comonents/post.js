import React from 'react'
import "../styles/post.css"
import {Avatar} from "@material-ui/core"

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
            
        </div>
    )
}

export default post
