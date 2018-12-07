import React,{ Component } from 'react';
import './Home.scss'
import Tabbar from './../../components/common/Tabbar.js'
import HomeHeader from './HomeHeader.js'
import Banner from './Banner.js'
import Category from './Category.js'
import Tour from './Tour.js'
import Hot from './Hot.js'


class Home extends Component {
	render(){
		return(
			<div className = "home">
				<HomeHeader/>
				<Banner/>
				<Category/>
				<Tour/>
				<Hot props = {this.props} />
				<Tabbar checkedId = "t1"/>
			</div>
		)
	}
}
export default Home;