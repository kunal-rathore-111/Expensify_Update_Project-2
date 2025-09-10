import { useNavigate } from "react-router-dom";

import "./errorPage.css";

export const ErrorElement = () => {
  const navigate = useNavigate();
  return (
    <div className="ErrorPage">
      <h1>This page is Invalid</h1>
      <button
        onClick={() => {
          navigate("/");
        }}
        className="ErrorButton">
        Click here to navigate to LandingPage
      </button>
    </div>
  );
};
