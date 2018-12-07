import React, { Component } from 'react';
import Home from './pages/Home/Home';
import Show from './pages/Show/Show';
import Mine from './pages/Mine/Mine';
import Search from './pages/Search/Search';
import Detail from './pages/Detail/Detail';
import TourShow from './pages/TourShow/TourShow';
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
					<Route path = '/search' component = {Search}/>
					<Route path = '/detail' component = {Detail}/>
					<Route path = '/tourShow' component = {TourShow}/>
				</Switch>
			</div>
		</Router>
    );
  }
}

export default App;
