import './App.css';
import {
  BrowserRouter,
  Route,
  Link
} from "react-browser-router";
import Album from "./components/Album";
import Discography from "./components/Discography";
import NewestRelease from "./components/NewestRelease";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      artist: '',
      album: ''
    }
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <h1>Hello all!</h1>
          <NewestRelease />
          <Route path="/" component={NewestRelease} />
          <Route path="/discography" component={Discography} />
          <Route path="/album" component={Album} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
