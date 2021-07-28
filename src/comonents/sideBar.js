import React from "react";
import "../styles/sidebar.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import SideBarOptions from "./sideBarOptions";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Button } from "@material-ui/core";

function SideBar() {
  return (
    <div className="sidebar">
      <TwitterIcon className="sidebar_twitterIcon" />
      <SideBarOptions active Icon={HomeIcon} text="Home" />
      <SideBarOptions Icon={SearchIcon} text="Search" />
      <SideBarOptions
        Icon={NotificationsNoneOutlinedIcon}
        text="Notification"
      />
      <SideBarOptions Icon={MailOutlineIcon} text="Message" />
      <SideBarOptions Icon={BookmarkBorderIcon} text="Bookmark" />
      <SideBarOptions Icon={ListAltIcon} text="List" />
      <SideBarOptions Icon={PersonOutlineIcon} text="Profile" />
      <SideBarOptions Icon={MoreHorizIcon} text="More" />

      {}
      <Button variant="outlined" className="sidebar_tweet" fullWidth>
        Tweet
      </Button>
    </div>
  );
}

export default SideBar;
