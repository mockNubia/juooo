import React,{ Component } from 'react'
import './Jucard.scss'

class Jucard extends Component {
	render(){
		return(
			<div className = "jucard">
				<p>欢聚橙卡<span>橙PLUS卡</span></p>
				<i className = 'fa fa-ellipsis-h'></i>
				<div className = 'shade'>
					<div className = 'cardetail'>
						<div>
							<p className = 'cardtitle'>欢聚橙卡<i className = 'fr'>X</i></p>
							<p className = 'cardInfo'>
								<span>橙PLUS卡</span>
								每单限购6张,限999单
								<a href = '#' title = 'fsafdsf'>了解详情&gt;</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
export default Jucard