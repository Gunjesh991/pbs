import { useRef, useState } from "react";
import useEstimate from "../../hooks/useEstimate";
import "./hire.css";

import { getFirestore, addDoc, collection } from "firebase/firestore";
import { app } from "../../utils/firebase";
import { useNavigate } from "react-router-dom";

const Hire = () => {
  const fireStore = getFirestore(app);
  const navigate = useNavigate();

  const { estimationObj, estimation } = useEstimate();
  const [personalDetails, setPersonalDetails] = useState({
    fullName: "",
    email: "",
    phone: "",
    additionalInformation: "",
  });

  const updatePersonalInfo = (field) => (e) => {
    setPersonalDetails((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const estimationData = estimation
      ? {
          ...estimationObj,
          estimation,
        }
      : null;
    addDoc(collection(fireStore, "hire_requests"), {
      estimationData,
      personalDetails,
    })
      .then((_doc) => {
        console.log({ _doc });
        alert(`Reference ID: ${_doc.id}`);
        navigate("/");
      })
      .catch((err) => {
        console.log({ err });
        alert("There was a problem requesting. Please, try again.");
      });
  };

  return (
    <>
      <div className="hire">
        <div className="hire__wrapper">
          {/* header */}
          <div className="hire__header">
            <h2>
              Offer <span>Proposal</span>
            </h2>
            <div className="offer__details">
              <p>Thank you for considering Groot Photography.</p>
              <p>
                This is your first step. Please, fill in your information below
                and I will be in touch with you ASAP.
              </p>
            </div>
          </div>
          {/* body */}
          <div className="hire__body">
            {/* estimation */}
            <div className="estimate__details">
              {estimation ? (
                <>
                  <h2>Estimation Details</h2>
                  <p>Your estimation is: NRS {estimation}</p>
                </>
              ) : (
                <>You are proceeding without estimation data.</>
              )}
            </div>
            {/* form */}
            <div className="hire__form">
              <form onSubmit={onSubmit}>
                <h2>Personal Details</h2>

                <div className="input__field">
                  <label htmlFor="fullName">Full Name</label>
                  <input
                    required
                    type="text"
                    name="fullName"
                    id="fullName"
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
                    value={personalDetails.phone}
                    onChange={updatePersonalInfo("phone")}
                  />
                </div>
                <div className="input__field optional">
                  <label htmlFor="phone">Additional Information</label>
                  <textarea
                    name="additionalInfo"
                    id="additionalInfo"
                    rows={6}
                    value={personalDetails.additionalInformation}
                    onChange={updatePersonalInfo("additionalInformation")}
                  ></textarea>
                </div>
                <button type="submit">Confirm Proposal</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hire;
