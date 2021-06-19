import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import TwitterIcon from "@material-ui/icons/Twitter";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import MoreHorizOutlined from "@material-ui/icons/MoreHorizOutlined";
import PersonOutline from "@material-ui/icons/PersonOutlineOutlined";
import ListAlt from "@material-ui/icons/ListAlt";
import { Button } from "@material-ui/core";

function Sidebar() {
  return (
    <div className="sidebar">
      <TwitterIcon className="sidebar__twitterIcon" />

      <SidebarOption active text="Home" Icon={HomeIcon} />
      <SidebarOption Icon={SearchIcon} text="Explore" />
      <SidebarOption text="Notification" Icon={NotificationsNoneIcon} />
      <SidebarOption text="Messages" Icon={MailOutlineIcon} />
      <SidebarOption text="Bookmarks" Icon={BookmarkBorderIcon} />
      <SidebarOption text="Lists" Icon={ListAlt} />
      <SidebarOption text="Profile" Icon={PersonOutline} />
      <SidebarOption Icon={MoreHorizOutlined} text="More" />

      <Button className="sidebar__tweet" fullWidth>
        {" "}
        Tweet{" "}
      </Button>
    </div>
  );
}

export default Sidebar;
