import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import AlbumContainer from "./components/AlbumContainer";
import DiscographyContainer from "./components/DiscographyContainer";
import NewestReleaseContainer from "./components/NewestReleaseContainer";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="app-container">
          <Header />
          <Routes>
            <Route path="/" element={<NewestReleaseContainer />} />
            <Route path="/album" element={<AlbumContainer />} />
            <Route path="/discography" element={<DiscographyContainer />} />
            <Route path="*" element={<NewestReleaseContainer />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
