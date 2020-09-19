import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./components/auth/auth.css";
import "./components/property/property.css";
import "./components/profile/profile.css";
import "./components/auth/auth.css";
import "./components/landing/landing.css";
import App from "./App";
import AuthContext from "./contexts/authContext";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.render(
  <>
    <AuthContext>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </AuthContext>
  </>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
