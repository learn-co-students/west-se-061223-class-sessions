import React from "react";
import TweetItem from "./TweetItem";

function TweetList({user, onLikeTweet}) {
  return (
    <div className="ui segment">
      <div className="ui feed">
        {user.tweets.map((tweet) => (
          <TweetItem
            key={tweet.id}
            onLikeTweet={onLikeTweet}
            handle={user.handle}
            photo={user.photo}
            tweet={tweet}
          />
        ))}
      </div>
    </div>
  );
}

export default TweetList;
