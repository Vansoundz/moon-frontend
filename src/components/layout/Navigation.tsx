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
          <Link to="/">MOON</Link>
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
            <li className="npad">Contact</li>
          </ul>
        </div>
        <div className="npad">
          <span>f</span>
          <span>t</span>
          <span>i</span>
        </div>
      </div>
    </div>
  );
};
export default Navigation;
