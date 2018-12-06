import React,{ Component } from 'react'
import './DetailHeader.scss'

class DetailHeader extends Component {
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
			<div className = "detailHeader"
				style = {{
						background:this.state.showTitle ? '#fff' : '',
						color:this.state.showTitle ? '#666' : '#fff',
					}}
			>
				<i className = 'fa fa-lg fa-angle-left' onClick = {this.goBack}></i>
				<p style = {{
					opacity:this.state.showTitle ? 1 : 0
				}}>演出详情</p>
				<i className = 'fa fa-lg fa-ellipsis-h'></i>
			</div>
		)
	}
	componentDidMount(){
		window.addEventListener('scroll',()=>{
			if(window.scrollY>60){
				this.setState({
					showTitle:true
				})
			}else{
				this.setState({
					showTitle:false
				})
			}
		})
	}
}
export default DetailHeader