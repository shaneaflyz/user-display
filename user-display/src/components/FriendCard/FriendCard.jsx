import React from 'react'
import './FriendCard.css'

const FriendCard = ({ friend }) => {
  return (
    <div className="friend-card">
      <img src={friend.picture.medium} alt={`${friend.name.first} ${friend.name.last}`} />
      <div className="friend-details">
        <h2>{`${friend.name.first} ${friend.name.last}`}</h2>
        <p>Email: {friend.email}</p>
        <p>Phone: {friend.phone}</p>
      </div>
    </div>
  )
}

export default FriendCard