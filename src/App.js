import React from 'react';
import './App.css';
import {
  Route,
  Switch
} from "react-browser-router";
import Album from "./components/Album";
import Discography from "./components/Discography";
import NewestRelease from "./components/NewestRelease";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bandName: '',
      album: ''
    };
    this.getAlbum = this.getAlbum.bind(this);
    this.getDiscography = this.getDiscography.bind(this);
  }

  getAlbum(band, title) {
    this.setState({
      bandName: band,
      album: title
    });
  }

  getDiscography(band) {
    this.setState({
      bandName: band
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Hello all!</h1>
        <Switch>
          <Route exact path="/" render={ ()=><NewestRelease getDiscography={this.getDiscography} getAlbum={this.getAlbum}/> }/>
          <Route path="/album" render={ ()=><Album  getDiscography={this.getDiscography} bandName={this.state.bandName} album={this.state.album}/> }/>
          <Route path="/discography" render={ ()=><Discography  getAlbum={this.getAlbum} bandName={this.state.bandName}/> }/>
        </Switch>
      </div>
    );
  }
}

export default App;
