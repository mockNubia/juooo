import React, { Component } from 'react'
import './DetailTabbar.scss'

class DetailTabbar extends Component {
	render(){
		return(
			<div className = 'detailTabbar'>
				<div className = 'tbleft'>
					<i className = 'fa fa-2x fa-headphones'></i>
					<span>客服</span>
				</div>
				<p>立即购票</p>
			</div>
		)
	}
}
export default DetailTabbar