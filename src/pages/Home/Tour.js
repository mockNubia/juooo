import React,{ Component } from 'react'
import './Tour.scss'
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'

class Tour extends Component {
	constructor(props){
		super(props)
		this.state = {
			tours:[
				{}
			]
		}
	}
	componentWillMount(){
		this.$post({
			url:'/jc/Tour/ShowList',
			data:{
				
			}
		})
		.then(res=>{
			let data = res.data.data;
			this.setState({tours:data})
		})
	}
	render(){
		return(
			<div className = "tour">
				<div className = "tourTitle">
					<p>巡回演出</p>
					<span>更多巡演&nbsp;<i className = "fa fa-angle-right"></i></span>
				</div>
				<div className="swiper-container tourSwiper">
					<div className="swiper-wrapper">
						{
							(()=>{
								return this.state.tours.map(item=>{
									return(
										<div className="swiper-slide" style = {{width:'150px !important'}} key={item.show_id+10}>
											<img src = {item.pic} alt = {item.show_name}/>
											<p dangerouslySetInnerHTML={{__html:((items)=>{
													var span = '';
													for(item in items){
														span+='<span key = "'+items[item].city_id+'">'+items[item].city_name+' /</span>'
													}
													return span
												})(item.cityItems)}}>
												
											
											</p>
										</div>
									)
								})
							})()
						}
					</div>
				</div>
			</div>
		)
	}
	componentDidUpdate(){
		new Swiper('.tourSwiper',{
			  slidesPerView: 5,
			  spaceBetween: 50,
			  breakpoints: {
				1024: {
				  slidesPerView: 4,
				  spaceBetween: 40,
				},
				768: {
				  slidesPerView: 3,
				  spaceBetween: 10,
				},
				640: {
				  slidesPerView: 3,
				  spaceBetween: 8,
				},
				320: {
				  slidesPerView: 3,
				  spaceBetween: 6,
				}
			  }
			})
	}
}
export default Tour