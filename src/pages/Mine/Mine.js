import React,{ Component } from 'react';
import './Mine.scss'
import { Route } from "react-router-dom";

import Login from './Login.js';
import Reg from './Reg.js';
import Info from './Info.js';



class Mine extends Component {
	render(){
		return(
			<div className = "mine">
				<Route path="/Mine" exact component={Info} />
				<Route path="/Mine/Login" component={Login} />
        		<Route path="/Mine/Reg" component={Reg} />
				<Route path="/Mine/Info" component={Info} />
			</div>
		)
	}
}

export default Mine;