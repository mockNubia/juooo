import React,{ Component } from 'react'
import './Jucard.scss'

class Jucard extends Component {
	constructor(props){
		super(props)
		this.state = {
			isShade:false
		}
	}
	showShade(){
		this.setState({
			isShade:true
		})
	}
	hideShade(e){
		this.setState({
			isShade:false
		})
	}
	render(){
		return(
			<div className = "jucards">
				<div className = "jucard" onClick = {this.showShade.bind(this)}>
					<p>欢聚橙卡<span>橙PLUS卡</span></p>
					<i className = 'fa fa-ellipsis-h'></i>
				</div>
				<div className = 'shade'
					style = {{display:this.state.isShade ? 'block' : 'none'}}
				>
				<div className = 'shadebg'
				onClick = {this.hideShade.bind(this)}
				></div>
					<div className = 'cardetail'>
						<div>
							<p className = 'cardtitle'>欢聚橙卡
								<i className = 'fr' onClick = {this.hideShade.bind(this)}>X</i>
							</p>
							<p className = 'cardInfo'>
								<span>橙PLUS卡</span>
								每单限购6张,限999单
								<a href = '/home' title = 'fsafdsf'>了解详情&gt;</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
export default Jucard