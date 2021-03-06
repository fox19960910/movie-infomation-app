import React from "react";
import { Route, Switch } from "react-router-dom";

import Catalog from "../pages/Catalog";
import Home from "../pages/Home";
import Detail from "../pages/Detail/Detail"

const Routes = (props) => {
  return (
    <Switch>
      <Route path="/:category/search/:keyword" component={Catalog} />

      <Route path="/:category/type/:type" component={Catalog} />

      <Route path="/:category/:id" component={Detail} />

      <Route path="/:category/" component={Catalog} />

      <Route exact path="/" component={Home} />
    </Switch>
  );
};

export default Routes;
