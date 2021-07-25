import React from 'react'
import "../styles/sideBarOptions.css"

function sideBarOptions({ active, text , Icon}) {
    return (
        <div className={`sideBarOptions ${active && "sideBarOptions--active"}`}>
        <Icon/>
        <h2>{text}</h2>
    
        </div>
    )
}

export default sideBarOptions
  