import './App.css';
import React, { Component } from 'react';
import {
  Route,
  Switch
} from "react-browser-router";
import Album from "./components/Album";
import Discography from "./components/Discography";
import NewestRelease from "./components/NewestRelease";

/*App component starts here */
class App extends Component {
  render() {
    return (
      <div className="container">
        <h1>Hello all!</h1>
        <Switch>
          <Route exact path="/" render={() => <NewestRelease />} />
          <Route path="/album" render={() => <Album />} />
          <Route path="/discography" render={() => <Discography />} />
        </Switch>
      </div>
    );
  }
}

export default App;