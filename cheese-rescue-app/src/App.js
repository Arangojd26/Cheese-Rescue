import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./app/pages/HomePage/Home.page";
import Player from "./app/pages/PlayerPage/Player.page";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/player">
          <Player />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
