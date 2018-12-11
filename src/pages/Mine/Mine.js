import React,{ Component } from 'react';
import './Mine.scss'
import { Route } from "react-router-dom";
import { connect } from 'react-redux';
import Login from './Login.js';
import Reg from './Reg.js';
import Info from './Info.js';

class Mine extends Component {
	constructor(props) {
		super(props)
		this.props = props;
		this.state={
			user : "",
			password : ""
		}
	};
	render(){
		return(
			<div className = "mine">
				<Route path="/mine/login" component={Login} />
        		<Route path="/mine/reg" component={Reg} />
				<Route path="/mine" exact component={Info} />
			</div>
		)
	};
	isLogin(){
		var storage=window.localStorage;
		const isLogin = storage.isLogin
		if(isLogin===false){
			return(
				this.props.history.push('/mine/login')
			)
		}else{
			return(
				this.props.history.push('/mine')
			)
		}
	};
	componentWillMount(){
		this.isLogin()
	};
}

export default connect((state) => {
    return state
}, (dispatch) => {
    return {
        onIncreaseClick() {
			dispatch({
				type:"LOGIN",
				isLogin:true
			})
        }
    }
})(Mine);