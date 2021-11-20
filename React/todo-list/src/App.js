import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Deatil from "./routes/Detail";
import Home from "./routes/Home";
function App() {
  return <Router>
      <Switch>
        <Route path="/movie/:id">
          <Deatil />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
    ;
}

export default App;
