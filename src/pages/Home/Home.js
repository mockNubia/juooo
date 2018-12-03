import React,{ Component } from 'react';

class Home extends Component {
	componentWillMount(){
		this.$post({
			url:'/jc/index/hotsShowList',
			data:{
				city_id:3
			}
		})
	}
	render(){
		return(
			<div className = "home">
				this is home
			</div>
		)
	}
}
export default Home;