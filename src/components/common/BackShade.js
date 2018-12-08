import React,{ Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import './BackShade.scss'

class BackShade extends Component {
	render(){
		return(
			<div className = 'backShade'
				style = {{display:this.props.isShowShade ? 'block' : 'none'}}
				onClick = {this.props.changeShade}
			>
				<div className = 'content'>
					<i className = 'up fa fa-lg fa-caret-up'></i>
					<Link to = '/'><i className = 'fa fa-home'></i>首页</Link>
					<p className = 'borderBottom'></p>
					<Link to = '/mine'><i className = 'fa fa-user-o'></i>我的聚橙</Link>
				</div>
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
				isShowShade:false
			})
		}
	}
})(BackShade)