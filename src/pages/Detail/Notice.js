import React, { Component } from 'react'
import './Notice.scss'

class Notice extends Component {
	render(){
		return(
			<div className = 'notice'>
				<h3 className="title">— 购票须知 —</h3>
				<div className="ticket-txt">
					<p>1.为避免快递配送不能及时到达，距演出开场时间少于3天不提供快递服务，您可以选择电子票或者在线支付后上门自取纸质票。（主办演出可在演出现场取票）。</p>
					<p>2.网上订购请提前选择您意欲购买的演出和票品价位，根据流程提示完成订票。</p>
					<p>3.成功下单后，我们将短信与你确认订单信息，如有任何疑问，请致电我们的客服热线：400-185-8666，客服人员将第一时间为您服务。</p>
					<p>4.因票品的特殊性，一经订购，不退不换，请订票前务必确认购买意向。</p>
				</div>
				<div className="in-to-know">
					入场须知： <span className="text">"1.2米以下小朋友谢绝入场， 1.2米以上一人一票，凭票入场。"</span>
				</div>
			</div>
		)
	}
}
export default Notice