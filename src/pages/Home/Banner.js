import React,{ Component } from 'react'
import './Banner.scss'
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'

class Banner extends Component {
	constructor(props){
		super(props)
		this.state = {
			banners:[]
		}
	}
	changeBanner(data){
		this.setState({banners:data})
	}
	componentWillMount(){
		this.$post({
			url:'/jc/index/getNationalSildeList',
			data:{
				confType: 'L',
				isSymbol: 1,
				limit: 6
			}
		})
		.then(res=>{
			let data = res.data.data;
			this.changeBanner(data)
		})
	}
	render(){
		return(
			<div className = 'bannerBox'>
				<div className="swiper-container banner">
					<div className="swiper-wrapper">
						{
							(()=>{
								return this.state.banners.map(item=>{
									return (
										<div className="swiper-slide" key={item.si_id}>
											<img src={'http://image.juooo.com/'+item.touch_image_url} alt={item.title}/>
										</div>
									)
									})
								})()
						}
					</div>
					<div className="swiper-pagination">
					</div>
				</div>
			</div>
		)
	}
	componentDidUpdate(){
		new Swiper('.banner',{
			loop: true,
			 autoplay:{
                delay: 2500,
                disableOnInteraction: false,
            },
			pagination: {
                el: '.swiper-pagination',
            }
		});
	}
}
export default Banner