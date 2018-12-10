import React,{ Component } from 'react'
import { connect } from 'react-redux'
import BackShade from '../../components/common/BackShade.js'
import './MoreTourHeader.scss'

class MoreTourHeader extends Component {
	constructor(props){
		super(props)
		this.state = {
		}
	}
	goBack(){
		window.history.go(-1);
	}
	render(){
		return (
			<div className = "moreTourHeader">
				<i className = 'fa fa-lg fa-angle-left' onClick = {this.goBack}></i>
				<p style = {{
				}}>巡回演出</p>
				<i className = 'fa fa-lg fa-ellipsis-h'
					onClick = {this.props.changeShade}
				></i>
				<BackShade/>
			</div>
		)
	}
}
export default connect((state)=>{
	return state
},(dispatch)=>{
	return{
		changeShade(){
			dispatch({
				type:'showShade',
				isShowShade:true
			})
		}
	}
})(MoreTourHeader)