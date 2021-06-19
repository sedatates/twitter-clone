import SearchIcon from "@material-ui/icons/Search";
import React from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterTweetEmbed
} from "react-twitter-embed";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="search" type="text" />
      </div>
      <div className="widgets__widgetContainer">
        
        <h2> What's happening</h2>
        <TwitterTweetEmbed
        tweetId={"1405565282647691266"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="CMYLMZ"
          options={{ height: 200 }}
        />

      </div>
    </div>
  );
}

export default Widgets;
