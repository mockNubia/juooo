import React,{ Component } from 'react';
import './Mine.scss'
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'

class Login extends Component {
	constructor(props) {
		super(props)
		this.props = props;
		this.state={
			username : "",
			password : ""
		}
	};
	render(){
		return(
				<div className = "login">
					<div className="link">
						<i  onClick={this.back}
							className="fa fa-angle-left" aria-hidden="true"></i>
						<Link to={'/Mine/Reg/'}>注册</Link>
					</div>
					<div className="main">
						<h1>欢迎来到聚橙网</h1>
						<div className="input">
							<input type="text" 
								placeholder="请输入手机号/邮箱" 
								 ref = 'username'
							/>
							<input type="password" 
								placeholder="请输入密码"  
								ref = 'password'
							/>
						</div>
						<div className="other">
							<span className="fl">验证码登录</span>
							<span className="fr">忘记密码</span>
						</div>
						<div className="btn">
							<button onClick={this.login.bind(this)}>登录</button>
						</div>
					</div>
				</div>
		)
	};
	login(){
		console.log(this.refs.username.value)
		let username = this.refs.username.value;
		let password = this.refs.password.value;
		if(username===''||password===''){
			alert('请输入账号密码')
		}else{
			if(username.length>=6&&password.length>=6&&username.length<=15){
				var storage=window.localStorage;
				storage.username =username;
				storage.password=password;
				this.props.onIncreaseClick()
				this.props.history.push('/Mine')
			}else{
				alert("err")
			}
		}
	};
	back(){
		window.history.go(-1)
	};
	componentWillMount(){
		var storage=window.localStorage;
		var username=storage.username;
		var password=storage.password;
		this.setState({
			username:username,
			password:password
		})
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
})(Login);