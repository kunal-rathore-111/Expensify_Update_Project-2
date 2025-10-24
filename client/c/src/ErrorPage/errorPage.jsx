import { useNavigate } from "react-router-dom";

import "./errorPage.css";

export const ErrorElement = () => {
  const navigate = useNavigate();
  return (
    <div className="ErrorPage">
      <div className="ErrorContent">
        <h1>404</h1>
        <h2>Oops! Page Not Found</h2>
        <p>The page you're looking for doesn't exist or has been moved.</p>
        <button
          onClick={() => {
            navigate("/");
          }}
          className="ErrorButton">
          Return to Home
        </button>
      </div>
    </div>
  );
};
