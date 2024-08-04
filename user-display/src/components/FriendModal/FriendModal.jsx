import React from 'react'
import './FriendModal.css'

const FriendModal = ({ show, onClose, friend }) => {
  if (!show) {
    return null
  }

  return (
    <div className="friend-modal-overlay">
      <div className="friend-modal">
        <img src={friend.picture.medium} alt={`${friend.name.first} ${friend.name.last}`} />
        <h2>{friend.name.first} {friend.name.last}</h2>
        <p>Email: {friend.email}</p>
        <p>Phone: {friend.phone}</p>
        <p>Date of Birth: {friend.dob.date.toString()}</p>
        <p>Location: {friend.location.city}, {friend.location.country}</p>
        <button className='button' onClick={onClose}>Close</button>
      </div>
    </div>
  )
}

export default FriendModal