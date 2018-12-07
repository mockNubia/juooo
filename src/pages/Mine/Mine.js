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
				<Route path="/Mine/Login" component={Login} />
        		<Route path="/Mine/Reg" component={Reg} />
				<Route path="/Mine" exact component={Info} />
			</div>
		)
	};
	isLogin(){
		if(!this.props.isLogin){
			return(
				this.props.history.push('/Mine/Login')
			)
		}else{
			return(
				this.props.history.push('/Mine')
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
			console.log(111)
			dispatch({
				type:"LOGIN",
				isLogin:true
			})
        }
    }
})(Mine);