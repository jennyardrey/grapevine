import React from 'react';
import './App.css';
import {Route , Switch} from 'react-router-dom';
import Login from './components/Login';
import MoodHome from './components/MoodHome';
import MoodScore from './components/MoodScore';

      function App() {
  return (
    <div className="App">

			 <Switch>
				 <Route
				 exact path="/" component={Login}
				 />
				 <Route exact path="/mood-home" component={MoodHome}
				 />
				 <Route exact path="/results" component={MoodScore}
				 />
			 </Switch>

    </div>
  );
}
export default App;
