import React, { useState, useEffect } from "react";
import "./Feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post";
import db from "./firebase";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  return (
    <div className="feed">
      {/**HEader */}
      <div className="feed__header">
        <h2>Home</h2>
      </div>

      {/**TWeeets */}
      <TweetBox />

      {posts.map((post) => (
        <Post
          displayName={post.displayName}
          username={post.username}
          verified={post.verified}
          text={post.text}
          avatar={post.avatar}
          image={post.image}
        />
      ))}

      <Post
        displayName="Sedatates"
        username="notsedat"
        verified={true}
        text="not firebase"
        avatar="https://lh3.googleusercontent.com/ogw/ADea4I54EsELTqK5unp2qSvUf8MsGp_nS_mrHn3HDzxq-Q=s32-c-mo"
        image="https://pbs.twimg.com/media/E4Kf_01WEAcKEl2?format=jpg&name=small"
      />
    </div>
  );
}

export default Feed;
