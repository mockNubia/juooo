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
					<Link to={'/mine/login/'}>登录</Link>
				</div>
				<div className="main">
					<h1>账号注册</h1>
					<div className="input">
						<input type="text" 
							placeholder="请输入账号"
							ref = 'regUsername'
							/>
						<input type="password" 
							placeholder="请输入密码"
							ref = 'regPassword'
							/>
					</div>
					<div className="btn">
						<button onClick={this.reg.bind(this)}>注册</button>
					</div>
				</div>
			</div>
		)
	};
	back(){
		window.history.go(-1)
	};
	reg(){
		let username = this.refs.regUsername.value;
		let password = this.refs.regPassword.value;
		if(username===''||password===''){
			alert('请输入账号密码')
		}else{
			if(username.length>=6&&password.length>=6&&username.length<=15){
				var storage=window.localStorage;
				storage.username =username;
				storage.password=password;
				this.props.history.push('/mine/login')
			}else{
				alert("err")
			}
		}
	}
}

export default Login;