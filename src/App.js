import React ,{Suspense, lazy} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import AsotApp from './ASOT1000/AsotApp';
const Landing = lazy(() => import('./ASOT1000/LandingPage'));


function App() {
  return (
    <>
     <Router>
       <Switch>
         <Route exact path='/'>
         <Suspense fallback={<div>Loading...</div>}>
            <Landing />
          </Suspense>
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
