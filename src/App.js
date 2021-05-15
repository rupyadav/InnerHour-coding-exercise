import "./App.css";
import { Route, Switch, Redirect } from "react-router-dom";
import ListDiff from "./components/task1/ListDiff";
import PomodoroClock from "./components/task2/PomodoroClock";
import NavBar from "./components/NavBar";

const App = () => (
  <div className="container">
    <NavBar />
    <Switch>
      <Route path="/" exact={true}>
        <Redirect to="/task1" />
      </Route>
      <Route path="/task1" exact={true} component={ListDiff} />
      <Route path="/task2" exact={true} component={PomodoroClock} />
    </Switch>
  </div>
);

export default App;
