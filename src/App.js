import "./App.css";
import { HomePage } from "./HomePage/HomePage";
import { CardDetail } from "./HomePage/components/Cards/components/CardDetail/CardDetail";
import { Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/cardDetail/:id" component={CardDetail} />
      </Switch>
    </div>
  );
}

export default App;
