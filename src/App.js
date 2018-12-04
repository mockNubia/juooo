import React, { Component } from 'react';
import Home from './pages/Home/Home';
import Show from './pages/Show/Show';
import Mine from './pages/Mine/Mine';
import {
	HashRouter as Router,
	Route,
	Switch
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
		<Router>
			<div className="App">
				<Switch>
					<Route path = '/' exact component = {Home}/>
					<Route path = '/home' component = {Home}/>
					<Route path = '/show' component = {Show}/>
					<Route path = '/mine' component = {Mine}/>
				</Switch>
			</div>
		</Router>
    );
  }
}

export default App;
