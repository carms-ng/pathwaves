import React from 'react';

const Profile = ({ user }) => (
  <div>
    <img src={user.picture} alt={user.name} />
    <h2>{user.name}</h2>
    <p>{user.email}</p>
  </div>
);

export default Profile;
