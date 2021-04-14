import './App.css';
import React from 'react';
import {
  Route,
  Switch
} from "react-router-dom";
import AlbumContainer from "./components/AlbumContainer";
import DiscographyContainer from "./components/DiscographyContainer";
import NewestReleaseContainer from "./components/NewestReleaseContainer";
import Header from "./components/Header";
import Footer from "./components/Footer";
import {
  BrowserRouter
} from "react-router-dom";
import { Provider } from 'react-redux';
import store from "./redux/store";

function App() {
  return (
      <Provider store={store}>
      <BrowserRouter>
        <div className="app-container">
          <Header />
          <Switch>
            <Route exact path="/" component={NewestReleaseContainer} />
            <Route path="/album" component={AlbumContainer} />
            <Route path="/discography" component={DiscographyContainer} />
          </Switch>
          <Footer />
        </div>
        </BrowserRouter>
      </Provider>
  );
}

export default App;