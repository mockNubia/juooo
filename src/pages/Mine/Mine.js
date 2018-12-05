import React,{ Component } from 'react';
import './Mine.scss'
import Tabbar from './../../components/common/Tabbar.js'
// import Reg from './Reg.js'
// import Login from './Login.js'

class Mine extends Component {
	constructor(props) {
		super(props)
		this.props = props;
	}
	render(){
		return(
			<div className = "Mine">
				<Tabbar checkedId = "t2"/>
			</div>
		)
	}
}
export default Mine;