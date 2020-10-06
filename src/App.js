import React from "react";
import { Route, Switch } from "react-router-dom";
import { Homepage } from "./pages/index";
import "./App.css";

function App() {
  return (
    <Switch>
      <Route path="/" component={Homepage} />
    </Switch>
  );
}

export default App;
