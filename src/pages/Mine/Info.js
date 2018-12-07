import React,{ Component } from 'react';
import Tabbar from './../../components/common/Tabbar.js'
import { connect } from 'react-redux';


class Info extends Component {
	constructor(props) {
		super(props)
		this.props = props;
		this.state={
			username:'',
			password:'',
			list1:[
				{
					money:0.00,
					unit:"元",
					title:"余额"
				},
				{
					money:22,
					unit:"分",
					title:"积分"
				},
				{
					money:0,
					unit:"张",
					title:"橙卡"
				},
				{
					money:4,
					unit:"张",
					title:"优惠券"
				},],
				list2:[
					{
						icon:'fa fa-bars',
						title:"我的订单",
						sect:"待付款/待收货"
					},
					{
						icon:'fa fa-ticket',
						title:"电子票夹",
						sect:""
					},
					{
						icon:'fa fa-credit-card',
						title:"我的卡包",
						sect:"了解详情"
					},
					{
						icon:'fa fa-vimeo-square',
						title:"会员中心",
						sect:""
					},
					{
						icon:'fa fa-star-o',
						title:"我的关注",
						sect:""
					},
					{
						icon:'fa fa-map-marker',
						title:"收货地址",
						sect:""
					},
					{
						icon:'fa fa-commenting-o',
						title:"我的消息",
						sect:""
					},
					{
						icon:'fa fa-file-text',
						title:"意见反馈",
						sect:""
					},
					{
						icon:'fa fa-headphones',
						title:"联系电话",
						sect:"400-185-8666"
					},
				]
		}
	};
	render(){
		return(
			<div className = "info">
                <div className="info_header">
					<div className="my_info">
						<img className="pic1" src="https://m.juooo.com/public/basic/Home/app/app-juooo4/images/common/logo-user.png" alt='' />
						{this.state.username}
						<img className="pic2" src="http://image.juooo.com//group1/M00/01/36/rAoKNVmxb0KACHvKAAARXyZnJHk783.png"   alt=""   />
						<i  onClick={this.quit.bind(this)}
							className="fa fa-angle-right" aria-hidden="true"></i>
					</div>
					<div className="card">
						<ul className="card_ul">
							<img className="pic3" src="https://m.juooo.com/public/basic/Home/app/app-juooo4/images/myjuooo/icon-cardLogo.png" alt=""  />
							<span className="card_1">尊享多项特权</span>
						</ul>
						<p className="card_2">开通橙PLUS卡，限时送100元</p>
					</div>
				</div>
				<div className="info_main">
					<div className="money">
						<ul>
							{(()=>{
								return this.state.list1.map((item,index)=>{
									return (
										<li key={index}>
											<span className="pri">{item.money}{item.unit}</span>
											<span className="title">{item.title}</span>
										</li>
									)
								})
							})()}
						</ul>
					</div>
					<div className="list">
						<ul>
							{(()=>{
								return this.state.list2.map((item,index)=>{
									return (
										<li key={index} className={"list" + index }>
											<i className={item.icon} aria-hidden="true"></i>{item.title}
											<i className="fa fa-angle-right fr" aria-hidden="true"></i>
											<span className="fr">{item.sect}</span>
										</li>
									)
								})
							})()}
						</ul>
						<div className="online">
							<button><i className="fa fa-headphones" aria-hidden="true"></i>在线客服</button>
						</div>
					</div>
				</div>
				<Tabbar checkedId = "t3"/>
			</div>
		)
	};
	quit(){
		if(window.confirm('你确定要退出吗？')){
			localStorage.clear();
			this.props.onIncreaseClick()
			this.props.history.push('/Mine/Login');
			return true;
		 }else{
			return false;
		}
	};
	componentWillMount(){
		var storage=window.localStorage;
		const username = storage.username;
		const password = storage.password;
		this.setState({
			username:username,
			password:password
		})
	};
	componentDidMount(){
	}
}
export default connect((state) => {
    return state
}, (dispatch) => {
    return {
        onIncreaseClick() {
			dispatch({
				type:"LOGIN",
				isLogin:false
			})
        }
    }
})(Info);