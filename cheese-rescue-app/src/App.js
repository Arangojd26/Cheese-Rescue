import './App.css';
import { BrowserRouter as Router, Switch,Route } from "react-router-dom";
import Home from './app/pages/HomePage/Home.page';
import Player from './app/pages/PlayerPage/Player.page';


function App() {

  return (
    <Router>
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={Player} path="/player" exact />
      </Switch>
    </Router>
  );
}

export default App;
