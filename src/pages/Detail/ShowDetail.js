import React, { Component } from 'react'
import './ShowDetail.scss'

class ShowDetail extends Component {
	constructor(props){
		super(props)
		this.state = {
			showTitle:null,
			showContent:null,
			loadmore:true
		}
	}
	componentWillMount(){
		this.setState({
			showTitle:JSON.parse(localStorage.detailList).title
		})
	}
	render(){
		return(
			<div className = 'showDetail'>
				<div className = 'showDetailh'>
					<h3 className = 'title'>— 演出介绍 —</h3>
					<p>{this.state.showTitle}</p>
				</div>
				<p className = 'loadMore' 
					onClick = {this.loadMore.bind(this)}
					style = {{
						display:this.state.loadmore ? 'block' : 'none'
					}}
					>
					查看详情&nbsp;
					<i className = 'fa fa-lg fa-angle-down'></i>
				</p>
				<div className = 'showContent' dangerouslySetInnerHTML={{__html:this.state.showContent}}></div>
			</div>
		)
	}
	loadMore(){
		this.$post({
			url:'/jc/Ticket/getIntroduce',
			data:{
				scid:JSON.parse(localStorage.sid)
			}
		})
		.then(res=>{
			this.setState({
				showContent:res.data.data,
				loadmore:false
			})
		})
	}
}
export default ShowDetail