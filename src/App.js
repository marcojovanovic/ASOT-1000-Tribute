
import AsotApp from './AsotApp';
import Landing from './LandingPage'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Landing />
          </Route>
          <Route exact path="/asot">
            <AsotApp />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
