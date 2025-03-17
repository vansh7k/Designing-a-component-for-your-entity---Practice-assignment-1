import React from 'react';

const UserCard = ({ name, email, profilePicture, bio }) => {
    return (
        <div className="user-card">
            <img src={profilePicture} alt={`${name}'s profile`} className="profile-picture" />
            <h2 className="user-name">{name}</h2>
            <p className="user-email">{email}</p>
            <p className="user-bio">{bio}</p>
        </div>
    );
};

export default UserCard;
