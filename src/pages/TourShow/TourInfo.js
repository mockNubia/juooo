import React,{ Component } from 'react'
import './TourInfo.scss'

class TourInfo extends Component {
	constructor(props){
		super(props)
		this.state = {
			tour:''
		}
	}
	componentWillMount(){
		let sid = (this.props.props.location.search).split('=')[1];
		this.$get({
			url:'/jc/tour/tourShowInfo',
			data:{
				sid:Number(sid)
			}
		})
		.then(res=>{
			this.setState({
				tour:res.data
			})
		})
	}
	render(){
		return(
			<div className = "tourInfo" dangerouslySetInnerHTML={{__html:this.state.tour}}>
				
			</div>
		)
	}
}
export default TourInfo