import React from "react";

function TweetItem({ photo, tweet, handle, onLikeTweet }) {
  return (
    <div className="event">
      <div className="label">
        <img alt="CoffeeDad" src={photo} />
      </div>
      <div className="content">
        <div className="summary">
          {handle}
          <div className="date">{tweet.created_at}</div>
        </div>
        <div className="extra text">{tweet.text}</div>
        <div className="meta">
          <button
            onClick={() => onLikeTweet(tweet)}
            className="ui tiny basic labeled icon like button"
          >
            <i className="like icon"></i> {tweet.favorite_count} Likes
          </button>
        </div>
      </div>
    </div>
  );
}

export default TweetItem;
