import { useState, useRef } from "react";
import AuthInput from "../components/Auth/AuthInput";
import { useDispatch, useSelector } from "react-redux";
import { GoogleLogin } from "react-google-login";
import { loginGoogleUser, signin, signup } from "../reducers/user";
import { useEffect } from "react";
import AlertError from "../components/Auth/AlertError";
const Auth = () => {
  const submitBtn = useRef(null);
  const { error } = useSelector(state => state.user);
  const [isSignUp, setIsSignUp] = useState(true);
  const [authValue, setAuthValue] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const dispatch = useDispatch();

  const onChange = e => {
    setAuthValue({ ...authValue, [e.target.name]: e.target.value });
  };

  const onSuccess = res => {
    const {
      dt: { Ot: email, PJ: imageUrl, Se: name },
      tokenId: token,
    } = res;
    const googleUser = { email, imageUrl, name, token };
    dispatch(loginGoogleUser(googleUser));
  };

  const validate = () => {
    const { firstName, lastName, email, password, confirmPassword } = authValue;
    if (isSignUp) {
      if (
        !firstName ||
        !lastName ||
        !email ||
        password.length < 6 ||
        confirmPassword.length < 6
      ) {
        submitBtn.current.disabled = true;
      } else {
        submitBtn.current.disabled = false;
      }
    } else {
      if (!email || !password) {
        submitBtn.current.disabled = true;
      } else {
        submitBtn.current.disabled = false;
      }
    }
  };

  const onSubmit = e => {
    e.preventDefault();
    if (isSignUp) {
      dispatch(signup(authValue));
    } else {
      dispatch(signin(authValue));
    }
  };

  useEffect(() => {
    validate();
  }, [authValue]);

  return (
    <section className="px-3 my-5">
      <div className="container" style={{ maxWidth: "700px" }}>
        <h3 className="text-center my-3">
          {isSignUp
            ? "Sign Up To Add Products To Cart"
            : "Sign In To Access Your Cart"}
        </h3>
        <form className="my-4" onSubmit={onSubmit}>
          {error && <AlertError />}
          {isSignUp && (
            <div className="input-rows">
              <AuthInput
                placeholder="John"
                name="firstName"
                type="text"
                label="First Name"
                onChange={onChange}
              />
              <AuthInput
                placeholder="Doe"
                name="lastName"
                type="text"
                label="Last Name"
                onChange={onChange}
              />
            </div>
          )}
          <AuthInput
            placeholder="johndoe@gmail.com"
            name="email"
            type="email"
            label="Email Address"
            onChange={onChange}
          />
          <AuthInput
            placeholder="Password"
            name="password"
            type="password"
            label="Password"
            onChange={onChange}
          />
          {isSignUp && (
            <AuthInput
              placeholder="Confirm Password"
              name="confirmPassword"
              type="password"
              label="Confirm Password"
              onChange={onChange}
            />
          )}
          <button
            type="submit"
            className="btn btn-outline-dark w-100 mb-3"
            ref={submitBtn}
          >
            {isSignUp ? "Sign Up" : "Sign In"}
          </button>
          <GoogleLogin
            clientId="1060665553821-r00ii5gu2tptpni1q3av9a4ofkkllplo.apps.googleusercontent.com"
            onSuccess={onSuccess}
            onFailure={err => console.log(err)}
            render={renderProps => (
              <button
                className="btn btn-dark w-100"
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
              >
                <i className="bi bi-google me-2"></i> Sign In With Google
              </button>
            )}
          />
          <div
            className="text-center btn w-100"
            onClick={() => setIsSignUp(!isSignUp)}
          >
            {isSignUp ? "Already Have An Account?" : "Don't Have An Account?"}{" "}
            <span className="text-primary">
              {isSignUp ? "Sign In" : "Sign Up"}
            </span>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Auth;
