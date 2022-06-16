import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import Modal from "../Modal";

const SignInModal = ({
  modalOpen,
  setModalOpen,
  onSignInComplete = () => {},
}) => {
  const { signInEmail, signIn } = useAuth();

  const [creds, setCreds] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);

  const updateCreds = (field) => (e) => {
    setCreds((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const onEmailSignIn = (e) => {
    e.preventDefault();
    setLoading(true);
    signInEmail(creds.email, creds.password)
      .then(() => {
        onSignInComplete();
        setModalOpen(false);
      })
      .catch((err) => console.log({ err }))
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Modal open={modalOpen} toggleModal={setModalOpen} title="Sign In Options">
      <div className="signin__options">
        <button
          onClick={() =>
            signIn().then(() => {
              onSignInComplete();
              setModalOpen(false);
            })
          }
        >
          Sign In with Google
        </button>
        <hr />
        <form onSubmit={onEmailSignIn}>
          <div className="input__field">
            <input
              type="email"
              required
              value={creds.email}
              onChange={updateCreds("email")}
              placeholder="Email Address"
            />
          </div>
          <div className="input__field">
            <input
              type="password"
              required
              value={creds.password}
              onChange={updateCreds("password")}
              minLength={8}
              placeholder="Your Password"
            />
          </div>
          <button disabled={loading}>Sign In with Email</button>
        </form>
      </div>
    </Modal>
  );
};

export default SignInModal;
