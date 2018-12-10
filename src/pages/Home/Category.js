import React,{ Component } from 'react'
import './Category.scss'
import { Link } from 'react-router-dom'

class Category extends Component {
	constructor(props){
		super(props)
		this.state = {
			catetops:[
				{
					id:'ct1',
					title:'演唱会',
					path:'/show?cid=-1&caid=35',
					imgUrl:'http://image.juooo.com/group1/M00/02/63/rAoKNVv3wYCAX0bZAAAfbg9q4H8171.png'
				},
				{
					id:'ct2',
					title:'音乐会',
					path:'/show?cid=-1&caid=36',
					imgUrl:'http://image.juooo.com/group1/M00/01/BA/rAoKmVv3wYqALz2-AAAskFG2SQQ804.png'
					},
				{
					id:'ct3',
					title:'舞台剧',
					path:'/show?cid=-1&caid=37',
					imgUrl:'http://image.juooo.com/group1/M00/02/63/rAoKNVv3wZOASJlrAAAf8WnEEP4854.png'
					},
				{
					id:'ct4',
					title:'音乐剧',
					path:'/show?cid=-1&caid=79',
					imgUrl:'http://image.juooo.com/group1/M00/01/BA/rAoKmVv3wZyADjFbAAAe9Wwhzaw344.png'
					},
				{
					id:'ct5',
					title:'儿童',
					path:'/show?cid=-1&caid=38',
					imgUrl:'http://image.juooo.com/group1/M00/02/63/rAoKNVv3waWAEfwqAAAi3ihMit4397.png'
					}
			],
			catebottoms:[
				{
					id:'cb1',
					title:'演出日历',
					imgUrl:'http://image.juooo.com/group1/M00/02/47/rAoKNVvIIbGAD-K0AAAOH9v_NJM654.png'
				},
				{
					id:'cb2',
					title:'聚特惠',
					imgUrl:'http://image.juooo.com/group1/M00/01/9D/rAoKmVvIIb2ALd7KAAAFL7b1wtg147.png'
				},
				{
					id:'cb3',
					title:'学生专区',
					imgUrl:'http://image.juooo.com/group1/M00/02/47/rAoKNVvIIcWAFU2WAAAJASjVCNQ181.png'
				},
				{
					id:'cb4',
					title:'欢聚橙卡',
					imgUrl:'http://image.juooo.com/group1/M00/02/59/rAoKNVvpE6yALBlLAAA5L1UVFII012.png'
				},
			]
		}
	}
	render(){
		return(
			<div className = "category">
				<div className="cateTop">
					{
						(()=>{
							return this.state.catetops.map(item=>{
								return(
									<Link to = {item.path} className="cateTopItem" key = {item.id}>
										<div>
											<img src={item.imgUrl} alt={item.title}/>
										</div>
										<p>{item.title}</p>
									</Link>
								)
							})
						})()
					}
				</div>
				<div className="cateBottom">
					{
						(()=>{
							return this.state.catebottoms.map(item=>{
								return(
									<div className="cateBottomItem" key = {item.id}>
										<div>
											<img src={item.imgUrl} alt={item.title}/>
										</div>
										<p>{item.title}</p>
									</div>
								)
							})
						})()
					}
				</div>
			</div>
		)
	}
}
export default Category