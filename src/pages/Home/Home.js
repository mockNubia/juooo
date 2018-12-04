import React,{ Component } from 'react';
import './Home.scss'
import Tabbar from './../../components/common/Tabbar.js'



class Home extends Component {
	render(){
		return(
			<div className = "home">
				this is home
				<Tabbar checkedId = "t1"/>
			</div>
		)
	}
}
export default Home;