import React,{ Component } from 'react';
import './Mine.scss'

import {Link} from 'react-router-dom'

class Login extends Component {
	constructor(props) {
		super(props)
		this.props = props;
	}
	render(){
		return(
				<div className = "login">
					<div className="link">
						<i className="fa fa-angle-left" aria-hidden="true"></i>
						<Link to={'/Mine/Login/'}>登录</Link>
					</div>
					<div className="main">
						<h1>账号注册</h1>
						<div className="input">
							<input type="text" placeholder="请输入账号" />
							<input type="password" placeholder="请输入密码" />
						</div>
						<div className="btn">
							<button>注册</button>
						</div>
					</div>
				</div>
		)
	}
}

export default Login;