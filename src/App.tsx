import React, { useContext, useEffect } from "react";
import Navigation from "./components/layout/Navigation";
import Routes from "./routes/Routes";
import { BrowserRouter } from "react-router-dom";
import { authContext } from "./contexts/authContext";
import { useQuery } from "react-query";
import { getUser } from "./services/authService";
import Appbar from "./components/layout/Appbar";
import Loading from "./components/layout/Loading";

const App = () => {
  const { data, error } = useQuery("get user", getUser);

  const {
    dispatch,
    auth: { loading },
  } = useContext(authContext);

  useEffect(() => {
    if (data && data.user) {
      dispatch({ type: `LOGIN`, payload: data.user });
    }
    if (data && data.errors) {
      dispatch({ type: `STOP` });
    }
    if (error) {
      dispatch({ type: `STOP` });
    }
    // eslint-disable-next-line
  }, [data, error]);

  return (
    <BrowserRouter>
      {loading ? (
        <Loading />
      ) : (
        <div className="app">
          <Navigation />
          <div className="">
            <Appbar />
            <Routes />
          </div>
        </div>
      )}
    </BrowserRouter>
  );
};

export default App;
