import React,{ Component } from 'react'

import './TourShow.scss'

import TourShowHeader from './TourShowHeader.js'
import TourInfo from './TourInfo.js'
class TourShow extends Component {
	render(){
		return(
			<div className = 'tourShow'>
				<TourShowHeader/>
				<TourInfo props = {this.props}/>
			</div>
		)
	}
}
export default TourShow