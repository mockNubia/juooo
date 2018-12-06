import React,{ Component } from 'react';
import './Mine.scss'
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'

class Login extends Component {
	constructor(props) {
		super(props)
		this.props = props;
		this.state={
			user : "",
			password : ""
		}
		console.log(this.props.isLogin)
	};
	render(){
		return(
				<div className = "login">
					<div className="link">
						<i className="fa fa-angle-left" aria-hidden="true"></i>
						<Link to={'/Mine/Reg/'}>注册</Link>
					</div>
					<div className="main">
						<h1>欢迎来到聚橙网</h1>
						<div className="input">
							<input type="text" 
								placeholder="请输入手机号/邮箱"  
								value={this.state.user}
								onChange={this.handleGetInputValue}
							/>
							<input type="password" 
								placeholder="请输入密码"  
								value={this.state.password}
								onChange={this.password}
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
	handleGetInputValue = (event) => {
		this.setState({
			user : event.target.value,
		})
	};
	password = (event) => {
		this.setState({
			password : event.target.value,
		})
	};
	login(){
		const user = this.state.user;
		const password = this.state.password;
		if(user.length>=6&&password.length>=6){
			var storage=window.localStorage;
			storage.username=user;
			storage.password=password;
			this.props.onIncreaseClick()
			
			
		}else{
			alert("err")
		}
    	
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
})(Login);