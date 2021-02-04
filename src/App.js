import './App.css';
import React, { Component } from 'react';
import {
  Route,
  Switch,
  Link
} from "react-router-dom";
import AlbumContainer from "./containers/AlbumContainer";
import DiscographyContainer from "./containers/DiscographyContainer";
import NewestReleaseContainer from "./containers/NewestReleaseContainer";

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <h1 className="title-message">Stoner Base</h1>
        <div className="navigation">
          <ul>
            <li>
              <Link to="/discography">Дискография Void Droid</Link>
            </li>
            <li>
              <Link to="/album">Альбом Void Droid - Bipolar</Link>
            </li>
            <li>
              <Link to="/">Все, что есть</Link>
            </li>
          </ul>
        </div>
        <Switch>
          <Route exact path="/" component={NewestReleaseContainer} />
          <Route path="/album" component={AlbumContainer} />
          <Route path="/discography" component={DiscographyContainer} />
        </Switch>
        <div className="footer" />
      </div>
    );
  }
}

export default App;