import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import TheLandingPage from "./components/TheLandingPage/index";
const App = (props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path={"/date-me"}
          exact
          render={(props) => {
            return <TheLandingPage />;
          }}
        />
        <Redirect to={"/date-me"} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
