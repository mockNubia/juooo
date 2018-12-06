import React,{ Component } from 'react'

import './Detail.scss'

import DetailHeader from './DetailHeader.js'
import DetailInfo from './DetailInfo.js'
class Detail extends Component {
	render(){
		return(
			<div className = 'detail'>
				<DetailHeader/>
				<DetailInfo/>
				<div className = 'bottomBorder'></div>
			</div>
		)
	}
}
export default Detail