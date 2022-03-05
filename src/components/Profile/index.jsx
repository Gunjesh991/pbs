import React from "react";

import ProfileMain from "../../assets/me/2.jpg";
import ProfileSec from "../../assets/me/3.jpg";

import "./profile.css";

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile__header">My Profile</div>
      <div className="profile__description">
        Hi! Gunjesh Basnet here. I am a professional photographer with more than
        3 years of hands-on experience. I specialize on wedding photoshoot, trip
        documentation as well as modelling and advertisements. My goto weapon of
        choice is Nikon D750 Full-Frame. I also own a Sony Alpha a7iv, a Canon
        80D and some Nikon D7100 with all the lens kit necessary to capture all
        your memorable moment in high quality.
      </div>
      <div className="profile__image">
        <img src={ProfileMain} alt="profile" />
      </div>

      <div className="profile__description">
        Hi! Gunjesh Basnet here. I am a professional photographer with more than
        3 years of hands-on experience. I specialize on wedding photoshoot, trip
        documentation as well as modelling and advertisements. My goto weapon of
        choice is Nikon D750 Full-Frame. I also own a Sony Alpha a7iv, a Canon
        80D and some Nikon D7100 with all the lens kit necessary to capture all
        your memorable moment in high quality.
      </div>

      <div className="profile__image">
        <img src={ProfileSec} alt="profile" />
      </div>

      <div className="profile__description">
        Contact me personally on{" "}
        <a href="mailto:gunjeshphotography@gmail.com">
          gunjeshphotography@gmail.com
        </a>
        .
      </div>
    </div>
  );
};

export default Profile;
