import React, { useContext, useEffect } from "react";
import { useMutation } from "react-query";
import { Link } from "react-router-dom";
import { authContext } from "../../contexts/authContext";
import { logout } from "../../services/authService";
import "./layout.css";

const Navigation = () => {
  const { dispatch } = useContext(authContext);

  // eslint-disable-next-line
  const [logoutUser, { data }] = useMutation(logout);

  useEffect(() => {
    if (data) {
      dispatch({ type: "LOGOUT" });
    }
    // eslint-disable-next-line
  }, [data]);

  return (
    <div className="nav-wrapper">
      <div className="navigation">
        <div className="npad">
          <Link to="/">
            MO
            <object
              data="/moon.svg"
              className="logo-svg"
              type="image/svg+xml"
              style={{
                transform: `rotateZ(180deg)`,
              }}
            >
              O
            </object>
            N
          </Link>
        </div>
        <div>
          <ul>
            <li className="npad">
              <Link to="/create-property">Sell</Link>
            </li>
            <li className="npad">
              <Link to="/find">Find</Link>
            </li>
            <li className="npad">
              <Link to="/">Home</Link>
            </li>
            <li className="npad">
              <Link to="/listings">Listings</Link>
            </li>
            {/* <li className="npad">
              <Link to="/listings">Profile</Link>
            </li> */}
            {/* <li className="npad">Contact</li> */}
          </ul>
        </div>
        <div className="npad social">
          <a
            href="https://www.facebook.com/TurnToGODhehasalltheanswers"
            target="_blank"
            rel="noopener noreferrer"
          >
            <object
              data="/assets/facebook.svg"
              className="social-icon"
              type="image/svg+xml"
              style={{ marginTop: "10px" }}
            >
              f
            </object>
          </a>
          <a
            href="https://twitter.com/silentEvans"
            target="_blank"
            rel="noopener noreferrer"
          >
            <object
              data="/assets/twitter.svg"
              className="social-icon"
              type="image/svg+xml"
              style={{ marginTop: "10px" }}
            >
              t
            </object>
          </a>

          <a
            href="https://www.instagram.com/vansoundz/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <object
              data="/assets/instagram.svg"
              className="social-icon"
              type="image/svg+xml"
              style={{ marginTop: "10px" }}
            >
              i
            </object>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Navigation;
