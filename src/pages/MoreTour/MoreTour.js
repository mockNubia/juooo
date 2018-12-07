import React , { Component } from 'react'
import MoreTourHeader from './MoreTourHeader.js'
import MoreTourInfo from './MoreTourInfo.js'

class MoreTour extends Component {
	render(){
		return(
			<div className = 'moreTour'>
				<MoreTourHeader/>
				<MoreTourInfo props = {this.props}/>
			</div>
		)
	}
}
export default MoreTour