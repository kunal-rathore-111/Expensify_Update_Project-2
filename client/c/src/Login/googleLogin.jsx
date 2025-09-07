

// google login page for Our website

import "./googleLogin.css";
import accountImage from "../assets/accountImg.png"

export const GoogleLogin = () => {

    return <div class="herodiv">

        <h1 class="welcomeMessage">Welcome to Expensify</h1>
        <br /><br />

        <div class="login_with_googleDiv">


            <li class="googleLink_and_googleLogo">

                {/* <!-- need to change for development --> */}
                <a href="http://localhost:3000/api/user/auth/google">

                    <div class="googleLogoDiv">
                        <img src={accountImage} class="googleLogoImage" />
                    </div>
                    Login with Google Account
                </a>
            </li>
        </div>
    </div>

}

