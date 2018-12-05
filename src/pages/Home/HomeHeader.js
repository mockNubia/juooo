import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './HomeHeader.scss'


class HomeHeader extends Component {
	render(){
		return(
			<div className = "homeHeader">
				<div className="hleft">
					<i className = "fa fa-lg fa-map-marker"></i>
					全国
				</div>
				<Link to = '/search' className="hright">
					<i className = "fa fa-search"></i>
					&nbsp;搜索演出、艺人或场馆
				</Link>
			</div>
		)
	}
}
export default HomeHeader