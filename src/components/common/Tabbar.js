import React,{ Component } from 'react'
import { NavLink } from 'react-router-dom'
import './Tabbar.scss'

class Tabbar extends Component {
	constructor(props){
		super(props)
		this.state = {
			tabbarList:[
				{id:'t1',title:'首页',icon:'home',path:'/home'},
				{id:'t2',title:'演出库',icon:'television',path:'/show?cid=-1'},
				{id:'t3',title:'我的',icon:'smile-o',path:'/mine'}
			]
		}
	}
	render(){
		return(
			<div className = "tabbar">
				<ul className = 'tabbarList borderTop'>
					{	(()=>{
						return this.state.tabbarList.map(item=>{
							return <NavLink 
									to = {item.path}
									className = {`tabbarItem ${this.props.checkedId === item.id ? 'active' : ''}`} 
									key = {item.id}
										>
										<i className = {'fa fa-lg fa-'+item.icon}></i>
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