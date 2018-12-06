import React,{ Component } from 'react';
import Tabbar from './../../components/common/Tabbar.js'

class Info extends Component {
	constructor(props) {
		super(props)
		this.props = props;
		this.state={
			list:[
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
				},]
		}
	}
	render(){
		return(
			<div className = "info">
                <div className="info_header">

				
				</div>
				<div className="info_main">
					<div className="money">
						{(()=>{
							return this.state.list.map((item,index)=>{
								return (
									<li key={index}>
										{item.unit}
										<span className=""></span>
									</li>
								)
							})
						})()}
					</div>
					<div className="list">
						
					</div>
				
				</div>
				<Tabbar checkedId = "t3"/>
			</div>
		)
	}
}
export default Info;