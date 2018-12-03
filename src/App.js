import React, { Component } from 'react';
import Home from './pages/Home/Home';
import {
	HashRouter as Router,
	Route
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
		<Router>
      <div className="App">
        ghsf
				<Route path = '/' component = {Home}/>
      </div>
		</Router>
    );
  }
}

export default App;
