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
					<div>
						<p>欢迎来到聚橙网</p>
						<input type="text" />
						<input type="password" />
						<span>忘记密码</span>
						<button>登录</button>
					</div>
				</div>
		)
	}
}
export default Login;