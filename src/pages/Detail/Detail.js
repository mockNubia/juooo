import React,{ Component } from 'react'

import './Detail.scss'

import DetailHeader from './DetailHeader.js'
import DetailInfo from './DetailInfo.js'
import ShowDetail from './ShowDetail.js'
import Notice from './Notice.js'
import DetailTabbar from './DetailTabbar.js'
class Detail extends Component {
	render(){
		return(
			<div className = 'detail'>
				<DetailHeader/>
				<DetailInfo/>
				<div className = 'bottomBorder'></div>
				<ShowDetail/>
				<div className = 'bottomBorder'></div>
				<Notice/>
				<div className = 'bottomBorder' style = {{marginBottom:'7.22rem'}}></div>
				<DetailTabbar/>
			</div>
		)
	}
}
export default Detail