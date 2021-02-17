import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Signup} exact/>
          <Route path="/login" component={Login} exact/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
