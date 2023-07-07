import React, { useState } from "react";
import TweetList from "./TweetList";
import UserList from "./UserList";
import { users as userData } from "../data/data";

function TweetsContainer() {
  const [users, setUsers] = useState(userData);
  const [selectedUserId, setSelectedUserId] = useState(users[0].id)

  function onSelectUser(userId){
    // console.log("🚀 ~ file: TweetsContainer.js:11 ~ onSelectUser ~ user:", user)
    setSelectedUserId(userId)
  }

  function handleLikeTweet(likedTweet) {
    // update the array of users
    const updatedUsers = users.map((user) => {
      // check if the user is the currently selected user
      if (user.id !== selectedUserId) return user;

      // if so, return a new object so this user will be updated
      return {
        ...user,
        // update the array of tweets
        tweets: user.tweets.map((tweet) => {
          // check if the tweet is the one being liked
          if (tweet !== likedTweet) return tweet;

          // if so, return a new object with the updated likes
          // phew!
          return {
            ...tweet,
            favorite_count: tweet.favorite_count + 1,
          };
        }),
      };
    });
    setUsers(updatedUsers);
  }

  const selectedUser = users.find(user => user.id == selectedUserId)
  console.log("🚀 ~ file: TweetsContainer.js:42 ~ TweetsContainer ~ selectedUser:", selectedUser)

  console.log("In TweetsContainer, state is", users);
  return (
    <div className="ui main container">
      <div className="ui grid">
        <div className="six wide column">
          <h2 className="ui header">Users</h2>
          <UserList users={users} onSelectUser={onSelectUser}/>
        </div>
        <div className="ten wide column">
          <h2 className="ui header">Tweets</h2>
          <TweetList user={selectedUser} onLikeTweet={handleLikeTweet}/>
        </div>
      </div>
    </div>
  );
}

export default TweetsContainer;
