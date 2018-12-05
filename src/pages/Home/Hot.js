import React,{ Component } from 'react'
import { Link } from 'react-router-dom'
import './Hot.scss'
class Hot extends Component {
	constructor(props){
		super(props)
		this.state = {
			hots:[]
		}
	}
	componentWillMount(){
		this.$post({
			url:'/jc/index/hotsShowList',
			data:{
				city_id: 0
			}
		})
		.then(res=>{
			let hotData = res.data.data;
			this.setState({
				hots:hotData
			});
		})
	}
	render(){
		return(
			<div className = "hot">
				<div className = 'hotTitle'>
					热门演出
					<i className = "fa fa-th-large"></i>
				</div>
				<div className = "hotContent">
				{
					(()=>{
						return this.state.hots.map(item=>{
								return <div className = "hotItem" key = {item.id}>
											<div className = "imgbox">
												<img src = {item.pic} alt = {item.venue_name} />
												<span className = 'logoi'></span>
											</div>
											<b className = "playName">{item.show_name}</b>
											<p className = "playTime">{(item.display_show_time).slice(0,10)}<span>{item.city_name}</span></p>
										</div>
						})
					})()
					
				}
				</div>
				<div className = "lookMore">
					<Link to = '/show?cid=-1'>查看更多演出&nbsp;
						<i className = "fa fa-angle-right"></i>
					</Link>
				</div>
			</div>
		)
	}
}
export default Hot