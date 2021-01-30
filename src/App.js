import './App.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Route,
  Switch
} from "react-browser-router";
import Album from "./components/Album";
import Discography from "./components/Discography";
import NewestRelease from "./components/NewestRelease";
import { getAlbum, getDiscography } from './actions'

/*App component starts here */
class App extends Component {

  constructor(props) {
    super(props);
    this.getAlbum = this.getAlbum.bind(this);
    this.getDiscography = this.getDiscography.bind(this);
  }

  render() {
    return (
      <div className="container">
        <h1>Hello all!</h1>
        <Switch>
          <Route exact path="/" render={() => <NewestRelease getDiscography={this.getDiscography} getAlbum={this.getAlbum} album={this.album} bandName={this.bandName} />} />
          <Route path="/album" render={() => <Album getDiscography={this.getDiscography} album={this.album} bandName={this.bandName} />} />
          <Route path="/discography" render={() => <Discography getAlbum={this.getAlbum} album={this.album} bandName={this.bandName} />} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  return {
    album: store.album,
    bandName: store.bandName
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAlbum: (bandName, album) => dispatch(getAlbum(bandName, album)),
    getDiscography: (bandName) => dispatch(getDiscography(bandName))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);