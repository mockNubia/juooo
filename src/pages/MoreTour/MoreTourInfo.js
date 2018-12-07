import React , { Component } from 'react'
import './MoreTourInfo.scss'

class MoreTourInfo extends Component {
	constructor(props){
		super(props)
		this.state = {
			moreTours:[],
			page:1,
			getTour:true,
			loadeMore:'加载更多',
			showloade:true
		}
	}
	render(){
		return(
			<div className = "moreTourInfo">
				<div className = "moreTourContent">
					<ul>
						{
							(()=>{
								return this.state.moreTours.map(item=>{
									return(
										<li
											className = 'tourItem borderBottom'
											key = {item.show_id}
											onClick = {this.toTour.bind(this,item.show_id)}
										>
											<div className = "imgBox">
												<img src = {item.pic} alt = {item.show_name} />
												<span className = 'logoi'></span>
											</div>
											<div className = "detail">
												<p className = "title">{item.show_name}</p>
												<p className = "time">{item.display_show_time}</p>
												<div className = "station">
													<ul dangerouslySetInnerHTML={{__html:((items)=>{
																items = items.slice(0,5)
																var li = '';
																for(item in items){
																	li+='<li key = "'+items[item].city_id+'">'+items[item].city_name+'</li>'
																}
																if(items.length === 5){
																	li+= '<li class = "lookMore">查看更多</li>'
																}
																return li
															})(item.cityItems)}}
													>
														
													</ul>
												</div>
											</div>
										</li>
									)
								})
							})()
						}
					</ul>
				</div>
				
				<div className = 'loadeMore' onClick = {this.getMoreTour.bind(this)}>
					<p
						style = {{display:!this.state.showloade ? 'block' : 'none'}}
					>{this.state.loadeMore}</p>
					<p
						style = {{display:this.state.showloade ? 'block' : 'none'}}
					>
						<i className = "fa fa-lg fa-spin fa-circle-o-notch"></i>
					</p>
				</div>
			</div>
		)
	}
	toTour(sid){
		console.log(this)
		this.props.props.history.push('/tourShow?sid='+sid)
	}
	getMoreTour(){
		if(this.state.getTour){
			this.setState({
				showloade:true
			})
			this.$post({
				url:'/jc/tour/ShowList',
				data:{
					page:this.state.page
				}
			})
			.then(res=>{
				var data = res.data.data;
				if(data.length > 0){
					this.setState({
						page:this.state.page+1,
						moreTours:this.state.moreTours.concat(data),
						showloade:false
					})
				}else{
					console.log('meiyoule')
					this.setState({
						getTour:false,
						loadeMore:'已经没有更多了',
						showloade:false
					})
				}
			})
		}else{
			console.log('不发送请求');
		}
	}
	componentWillMount(){
		this.getMoreTour()
	}
}
export default MoreTourInfo