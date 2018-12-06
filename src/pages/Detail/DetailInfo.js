import React,{ Component } from 'react'
import Jucard from './Jucard.js'
import './DetailInfo.scss'

class DetailInfo extends Component {
	constructor(props){
		super(props)
		this.state = {
			detailList:{},
			sid:null
		}
	}
	componentWillMount(){
		this.setState({
			detailList:JSON.parse(localStorage.detailList),
			sid:JSON.parse(localStorage.sid)
		})
	}
	render(){
		return(
			<div className = "detailInfo">
				<div className = "detailInfoBg"> 
					<img className = "bgimg" src = {this.state.detailList.img} alt = {this.state.detailList.title}/>
					<div className = "wihtebg"></div>
					<img className = 'showImg' src = {this.state.detailList.img} alt = {this.state.detailList.title}/>
				</div>
				<div className = 'detailContent'>
					<h3>{this.state.detailList.title}</h3>
					<p className = 'showTime'>时间:{this.state.detailList.time}</p>
					<p className = 'showDress'>场馆:{this.state.detailList.dress}&nbsp;|&nbsp;
							<i className = 'fa fa-map-marker'></i>
					</p>
					<p className = 'showPrice'>￥&nbsp;{this.state.detailList.price}</p>
				</div>
				<Jucard/>
			</div>
		)
	}
}
export default DetailInfo