import React, { useState } from "react";
import "./TweetBox.css";
import { Button, Avatar } from "@material-ui/core";
import db from './firebase'



function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = e => {
  e.preventDefault();
  db.collection('posts').add({
    displayName: 'CEM',
    username: 'CMYLMZ',
    verified: true,
    text: tweetMessage,
    image:tweetImage,
    avatar: "https://pbs.twimg.com/profile_images/1302333123057852419/x6gOFbia_400x400.jpg"
  })
  setTweetMessage("");
  setTweetImage("");
}
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://pbs.twimg.com/profile_images/1302333123057852419/x6gOFbia_400x400.jpg" />

          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="Neler oluyor?"
            type="text"
          />
        </div>

        <input
          onChange={(e) => setTweetImage(e.target.value)}
          value={tweetImage}
          className="tweetBox__imageInput"
          placeholder="Image url"
          type="text"
        />
        <Button onClick={sendTweet} className="tweetBox__tweetButton">Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;
