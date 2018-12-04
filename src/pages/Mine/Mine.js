import React,{ Component } from 'react';
import './Mine.scss'
import Tabbar from './../../components/common/Tabbar.js'



class Mine extends Component {
	render(){
		return(
			<div className = "mine">
				this is mine
				<Tabbar checkedId = "t3"/>
			</div>
		)
	}
}
export default Mine;