// google login page for Our website

import './googleLogin.css';
import accountImage from '../assets/accountImg.png';

export const GoogleLogin = () => {
  return (
    <div className="GoogleLoginPage page">
      <div className="herodiv">
        <h1 className="welcomeMessage">Welcome to Expensify</h1>
        <br />
        <br />

        <div className="login_with_googleDiv">
          <li className="googleLink_and_googleLogo">
            {/* <!-- need to change for development --> */}
            <a href="http://localhost:3000/api/user/auth/google">
              <div className="googleLogoDiv">
                <img src={accountImage} className="googleLogoImage" />
              </div>
              Login with Google Account
            </a>
          </li>
        </div>
      </div>
    </div>
  );
};
