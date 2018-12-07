import React,{ Component } from 'react';
import './Mine.scss'
import {Link} from 'react-router-dom'

class Login extends Component {
	constructor(props) {
		super(props)
		this.props = props;
		this.state={
			username:'',
			password:''
		}
	}
	render(){
		return(
			<div className = "login">
				<div className="link">
					<i 	onClick={this.back}
						className="fa fa-angle-left" aria-hidden="true"></i>
					<Link to={'/Mine/Login/'}>登录</Link>
				</div>
				<div className="main">
					<h1>账号注册</h1>
					<div className="input">
						<input type="text" 
							placeholder="请输入账号" 
							value={this.state.username}
							onChange={this.username}
							/>
						<input type="password" 
							placeholder="请输入密码"
							value={this.state.password}
							onChange={this.password}
							/>
					</div>
					<div className="btn">
						<button onClick={this.reg.bind(this)}>注册</button>
					</div>
				</div>
			</div>
		)
	};
	username = (event) => {
		this.setState({
			username : event.target.value,
		})
	};
	password = (event) => {
		this.setState({
			password : event.target.value,
		})
	};
	back(){
		window.history.go(-1)
	};
	reg(){
		const username = this.state.username;
		const password = this.state.password;
		if(username.length>=6&&password.length>=6){
			alert('注册成功')
			var storage=window.localStorage;
			storage.username=username;
			storage.password=password;
			this.props.history.push('/Mine/Login')
		}else{
			alert('账号密码长度必须大于或等于6位')
		}
	}
}

export default Login;