import React,{ Component } from 'react';
import { Route } from "react-router-dom";

import './Show.scss'
import Tabbar from './../../components/common/Tabbar.js'
import SHeader from './SHeader.js'
import SConnent from './SConnent.js'

class Show extends Component {
	constructor(props) {
		super(props)
		this.props = props;
	}
	render(){
		return(
			<div className = "show">
				<SHeader  history={this.props.history} />
				<div className="splic"></div>
				<Route path="/show/" exact component={SConnent} />
				<Route path="/show/all/" component={SConnent} />
                <Route path="/show/vocalconcert/" component={SConnent} />
				<Tabbar checkedId = "t2"/>
			</div>
		)
	}
}
export default Show;