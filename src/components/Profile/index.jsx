import { useEffect } from "react";
import { useParams } from "react-router-dom";

import ProfileMain from "../../assets/me/2.jpg";
import ProfileSec from "../../assets/me/3.jpg";
import { usePhotographers } from "../../hooks/usePhotographers";

import "./profile.css";

const Profile = () => {
  const { id = "" } = useParams();
  const { getPhotographerProfile, profile } = usePhotographers();

  useEffect(() => {
    getPhotographerProfile(id);
  }, [id]);

  useEffect(() => {
    console.log({ dt: profile.data });
  }, [profile.data]);

  return (
    <div className="profile">
      {profile.loading && <p>Loading...</p>}
      {!profile.loading && profile.data && (
        <>
          <div className="profile__header">{profile.data.fullName}</div>
          <div className="profile__description">
            <p
              dangerouslySetInnerHTML={{
                __html: profile.data.additionalInformation,
              }}
            ></p>
          </div>
          <div className="profile__image">
            <img src={ProfileMain} alt="profile" />
          </div>

          <div className="profile__description">
            <p
              dangerouslySetInnerHTML={{
                __html: profile.data.experience,
              }}
            ></p>
          </div>

          <div className="profile__image">
            <img src={ProfileSec} alt="profile" />
          </div>

          <div className="profile__description" style={{ textAlign: "left" }}>
            Contact me personally on{" "}
            <a href="mailto:gunjeshphotography@gmail.com">
              gunjeshphotography@gmail.com
            </a>
            .
          </div>
        </>
      )}
    </div>
  );
};

export default Profile;
