import React,{ Component } from 'react';
import './Show.scss'
import Tabbar from './../../components/common/Tabbar.js'



class Show extends Component {
	render(){
		return(
			<div className = "show">
				this is show
				<Tabbar checkedId = "t2"/>
			</div>
		)
	}
}
export default Show;