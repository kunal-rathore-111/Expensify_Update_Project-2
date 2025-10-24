// google login page for Our website

import './googleLogin.css';
import accountImage from '../assets/accountImg.png';

export const GoogleLogin = () => {
  return (
    <div className="GoogleLoginPage page">
      <div className="herodiv">
        <h1 className="welcomeMessage">Welcome to Expensify</h1>
        <p className="subtitle">Track your expenses effortlessly and take control of your finances</p>

        <div className="login_with_googleDiv">
          <ul className="googleLink_and_googleLogo">
            <a href="http://localhost:3000/api/user/auth/google">
              <div className="googleLogoDiv">
                <img src={accountImage} className="googleLogoImage" alt="Google" />
              </div>
              Continue with Google
            </a>
          </ul>
        </div>
      </div>
    </div>
  );
};
