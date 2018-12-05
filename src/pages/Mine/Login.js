import React,{ Component } from 'react';

class Login extends Component {
	constructor(props) {
		super(props)
		this.props = props;
	}
	render(){
		return(
			<div className = "login">
                <div>登录</div>
			</div>
		)
	}
}
export default Login;