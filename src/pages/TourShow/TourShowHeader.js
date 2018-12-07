import React,{ Component } from 'react'
import './TourShowHeader.scss'

class TourShowHeader extends Component {
	constructor(props){
		super(props)
		this.state = {
			showTitle:false
		}
	}
	goBack(){
		window.history.go(-1);
	}
	render(){
		return (
			<div className = "tourShowHeader"
				style = {{
						background:this.state.showTitle ? '#fff' : '',
						color:this.state.showTitle ? '#666' : '#fff',
					}}
			>
				<i className = 'fa fa-lg fa-angle-left' onClick = {this.goBack}></i>
				<p style = {{
				}}>巡演详情</p>
				<i className = 'fa fa-lg fa-ellipsis-h'></i>
			</div>
		)
	}
	watchScroll(){
		if(window.scrollY>60){
			this.setState({
				showTitle:true
			})
		}else{
			this.setState({
				showTitle:false
			})
		}
	}
	componentDidMount(){
		window.addEventListener('scroll',this.watchScroll.bind(this))
	}
	componentWillUnmount(){
		window.removeEventListener('scroll',this.watchScroll.bind(this))
	}
}
export default TourShowHeader