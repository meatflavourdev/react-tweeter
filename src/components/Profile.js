import React from "react";
import './Profile.css';

export const Profile = () => {
  return (
    <header id="header-main-profile">
      <figure className="profile-image">
        <img src="https://avatars.dicebear.com/4.4/api/avataaars/jeremyfelix.svg" width="500" height="500" alt="Profile"></img>
      </figure>
      <div>
        <h2 className="is-size-3"><span className="has-text-weight-semibold">Jeremy</span> Felix D.</h2>
      </div>
    </header>
  )
};
