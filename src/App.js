import { useEffect, useState } from "react";
import "./App.css";
import Forms from "./forms/formswithoulibrary/Forms";
import Reactforms from "./forms/Reactforms";
import Reacthook from "./forms/Reacthook";
import Students from "./Rtoolkittodo/Students";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Student from "./Rtoolkittodo/Student";
import Edit from "./Rtoolkittodo/Edit";

function App() {
  return (
    <div className="App">
      {/* <Reactforms /> */}
      {/* <Reacthook /> */}
      {/* <Forms /> */}
      <Router>
        <Switch>
          <Route exact path="/" component={Students} />
          <Route exact path="/student/:id" component={Student} />
          <Route exact path="/edit/:id" component={Edit} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
