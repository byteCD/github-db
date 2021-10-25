import React from "react";
import { Route, Switch } from "react-router";
import NotFound from "../../pages/NotFound/NotFound";
import Home from "../../pages/Home/Home";
import User from "../../pages/User/User";

const AppRouter = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/user/:username">
        <User />
      </Route>
      <Route path="*">
        <NotFound />
      </Route>
    </Switch>
  );
};

export default AppRouter;
