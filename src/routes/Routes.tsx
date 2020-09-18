import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";
import Properties from "../components/property/Properties";
import Profile from "../components/profile/Profile";
import CreateProperty from "../components/property/CreateProperty";
import Find from "../components/property/Find";
import { AnimatePresence } from "framer-motion";
import RouteGuard from "./RouteGuard";
import ViewProperty from "../components/property/ViewProperty";
import Listings from "../components/property/Listings";
import SearchPage from "../components/property/SearchPage";

const Routes = () => {
  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter key={location.key}>
      <Switch location={location} key={location.key}>
        <Route path="/" exact component={Properties} />
        <Route path="/search" exact component={SearchPage} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/find" exact component={Find} />
        <Route path="/listings" exact component={Listings} />
        <Route path="/property/:id" exact component={ViewProperty} />
        <RouteGuard path="/create-property" exact component={CreateProperty} />
      </Switch>
    </AnimatePresence>
  );
};

export default Routes;
