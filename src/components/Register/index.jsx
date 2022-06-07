import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAdminPhotographers } from "../../hooks/useAdminPhotographers";
import ImageUpload from "../ImageUpload";

import "./styles.css";

const RegisterPhotographer = () => {
  const { loading, registerPhotographer } = useAdminPhotographers();
  const navigate = useNavigate();

  const [personalDetails, setPersonalDetails] = useState({
    fullName: "",
    email: "",
    phone: "",
    additionalInformation: "",
    experience: "",
  });
  const [images, setImages] = useState({ image1: null, image2: null });

  const updatePersonalInfo = (field) => (e) => {
    setPersonalDetails((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  const updateLocalImages = (field) => (image) => {
    setImages((prev) => ({
      ...prev,
      [field]: image,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    registerPhotographer(personalDetails, images).then(() => {
      navigate("/admin/photographers");
    });
  };

  return (
    <div className="register__body">
      {/* form */}
      <div className="register__form">
        <form onSubmit={onSubmit}>
          <h2>Register Photographer</h2>

          <div className="input__field">
            <label htmlFor="fullName">Full Name</label>
            <input
              required
              type="text"
              name="fullName"
              id="fullName"
              placeholder="John Doe"
              value={personalDetails.fullName}
              onChange={updatePersonalInfo("fullName")}
            />
          </div>

          <div className="input__field">
            <label htmlFor="email">Email</label>
            <input
              required
              type="email"
              name="email"
              id="email"
              placeholder="smith@yahoo.com"
              value={personalDetails.email}
              onChange={updatePersonalInfo("email")}
            />
          </div>
          <div className="input__field">
            <label htmlFor="phone">Phone</label>
            <input
              required
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              name="phone"
              id="phone"
              placeholder="98-XXX-XXXXX"
              value={personalDetails.phone}
              onChange={updatePersonalInfo("phone")}
            />
          </div>
          <div className="input__field">
            <label htmlFor="additionalInfo">Bio</label>
            <textarea
              required
              name="additionalInfo"
              id="additionalInfo"
              placeholder="All about the photographer...."
              rows={12}
              value={personalDetails.additionalInformation}
              onChange={updatePersonalInfo("additionalInformation")}
            ></textarea>
          </div>
          <div className="input__field">
            <label htmlFor="experience">Experiences</label>
            <textarea
              required
              name="experience"
              id="experience"
              placeholder="Previous experiences...."
              rows={12}
              value={personalDetails.experience}
              onChange={updatePersonalInfo("experience")}
            ></textarea>
          </div>
          <div className="input__field optional">
            <label>Images</label>
            <div className="image__uploader">
              <div className="field">
                <ImageUpload setImage={updateLocalImages("image1")} />
              </div>
              <div className="field">
                <ImageUpload setImage={updateLocalImages("image2")} />
              </div>
            </div>
          </div>
          <button disabled={loading} type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPhotographer;
