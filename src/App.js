import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import AsotApp from './ASOT1000/AsotApp';
import LandingPage from './ASOT1000/LandingPage';





function App() {
  return (
    <>
     <Router>
       <Switch>
         <Route exact path='/'>
             <LandingPage />
         </Route>
         <Route exact path='/asot'>
             <AsotApp />
         </Route>
       </Switch>
     </Router>
    </>
  );
}

export default App;
