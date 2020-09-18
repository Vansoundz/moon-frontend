import { AnimatePresence, motion } from "framer-motion";
import React, { useContext, useEffect, useState } from "react";
import { useMutation } from "react-query";
import { Link } from "react-router-dom";
import { authContext } from "../../contexts/authContext";
import { logout } from "../../services/authService";

const Appbar = () => {
  const [logoutUser, { data }] = useMutation(logout);
  const [open, setOpen] = useState(false);

  const closeM = () => setOpen(!open);

  const {
    auth: { user },
    dispatch,
  } = useContext(authContext);

  useEffect(() => {
    if (data) {
      dispatch({ type: `LOGOUT` });
    }
  }, [data, dispatch]);

  return (
    <>
      <div className="appbar">
        <div className="appbar-wrapper">
          <div className="logo sm">
            <Link to="/">Moon</Link>
          </div>
          <div className="menu-icon sm">
            <div className="material-icons" onClick={() => setOpen(!open)}>
              {open ? "close" : "menu"}
            </div>
          </div>
          <div className="account lg">
            {user ? (
              <>
                <span className="material-icons">account_circle</span>
                <span onClick={() => logoutUser()} className="material-icons">
                  power_settings_new
                </span>
              </>
            ) : (
              <>
                <Link to="/login">Log In</Link>
                <Link to="/register">Sign Up</Link>
              </>
            )}
          </div>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              y: -1000,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            exit={{
              y: 1000,
              opacity: 0,
            }}
            className="menu"
          >
            <div>
              <ul id="menu-items">
                <li className="npad" onClick={closeM}>
                  <Link to="/create-property">Sell</Link>
                </li>
                <li className="npad" onClick={closeM}>
                  <Link to="/find">Find</Link>
                </li>
                <li className="npad" onClick={closeM}>
                  <Link to="/">Home</Link>
                </li>
                <li className="npad" onClick={closeM}>
                  <Link to="/listings">Listings</Link>
                </li>
                <li className="npad" onClick={closeM}>
                  Contact
                </li>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Appbar;
