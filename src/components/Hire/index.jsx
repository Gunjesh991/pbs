import { useRef } from "react";
import useEstimate from "../../hooks/useEstimate";
import "./hire.css";

const Hire = () => {
  const { estimationObj, estimation } = useEstimate();

  const onSubmit = (e) => {
    e.preventDefault();
    alert("Submitted");
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
                  <input required type="text" name="fullName" id="fullName" />
                </div>

                <div className="input__field">
                  <label htmlFor="email">Email</label>
                  <input required type="email" name="email" id="email" />
                </div>
                <div className="input__field">
                  <label htmlFor="phone">Phone</label>
                  <input
                    required
                    type="text"
                    inputmode="numeric"
                    pattern="[0-9]*"
                    name="phone"
                    id="phone"
                  />
                </div>
                <div className="input__field optional">
                  <label htmlFor="phone">Additional Information</label>
                  <textarea
                    name="additionalInfo"
                    id="additionalInfo"
                    rows={6}
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
