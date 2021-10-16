import { useState } from 'react';
import AuthInput from '../components/Auth/AuthInput';
import { useDispatch } from 'react-redux';
import { GoogleLogin } from 'react-google-login';
import { loginGoogleUser } from '../reducers/user';
const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const dispatch = useDispatch();
  const onSuccess = (res) => {
    const {
      dt: { Ot: email, PJ: imageUrl, Se: name },
      tokenId: token,
    } = res;
    const googleUser = { email, imageUrl, name, token };
    dispatch(loginGoogleUser(googleUser));
  };

  return (
    <section className="px-3 my-5">
      <div className="container" style={{ maxWidth: '700px' }}>
        <h3 className="text-center my-3">
          {isSignUp
            ? 'Sign Up To Add Products To Cart'
            : 'Sign In To Access Your Cart'}
        </h3>
        <form className="my-4">
          {isSignUp && (
            <div className="input-rows">
              <AuthInput
                placeholder="John"
                name="firstName"
                type="text"
                label="First Name"
              />
              <AuthInput
                placeholder="Doe"
                name="lastName"
                type="text"
                label="Last Name"
              />
            </div>
          )}
          <AuthInput
            placeholder="johndoe@gmail.com"
            name="email"
            type="email"
            label="Email Address"
          />
          <AuthInput
            placeholder="Password"
            name="password"
            type="password"
            label="Password"
          />
          <AuthInput
            placeholder="Confirm Password"
            name="confirmPassword"
            type="password"
            label="Confirm Password"
          />
          <button type="submit" className="btn btn-outline-dark w-100 mb-3">
            {isSignUp ? 'Sign Up' : 'Sign In'}
          </button>
          <GoogleLogin
            clientId="1060665553821-r00ii5gu2tptpni1q3av9a4ofkkllplo.apps.googleusercontent.com"
            onSuccess={onSuccess}
            onFailure={(err) => console.log(err)}
            render={(renderProps) => (
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
            {isSignUp ? 'Already Have An Account?' : "Don't Have An Account?"}{' '}
            <span className="text-primary">
              {isSignUp ? 'Sign In' : 'Sign Up'}
            </span>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Auth;
