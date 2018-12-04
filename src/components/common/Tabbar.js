import React,{ Component } from 'react'
import { NavLink } from 'react-router-dom'
import './Tabbar.scss'

class Tabbar extends Component {
	constructor(props){
		super(props)
		this.state = {
			tabbarList:[
				{id:'t1',title:'首页',icon:'user-o',path:'/home'},
				{id:'t2',title:'演出库',icon:'user-o',path:'show'},
				{id:'t3',title:'我的',icon:'user-o',path:'mine'}
			],
			tabbarActive:'t1'
		}
	}
	choose(changeId){
		console.log(changeId);
		this.setState({
			tabbarActive:changeId
		})
		}
	render(){
		return(
			<div className = "tabbar">
				<ul className = 'tabbarList borderTop'>
					{	(()=>{
						return this.state.tabbarList.map(item=>{
							return <NavLink 
								to = {item.path} 
								onClick = {this.choose.bind(this,item.id)}
								className = {`tabbarItem ${this.state.tabbarActive === item.id ? 'active' : ''}`} 
								key = {item.id}
									>
									<i className = {'fa fa-'+item.icon}></i>
								{item.title}
							</NavLink>
						})
					})()
						
					}
				</ul>
			</div>
		)
	}
}
export default Tabbar