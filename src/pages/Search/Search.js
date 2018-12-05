import React, { Component } from 'react'
import './Search.scss'
class Search extends Component {
	goBack(){
		window.history.go(-1);
	}
	render(){
		return (
			<div className = "search">
				<div className = "searchHeader borderBottom">
					<i className = "shleft fa fa-lg fa-angle-left" onClick = {this.goBack}></i>
					<div className = "shcenter">
						<i className = 'fa fa-search'></i>
						<input type = 'text' placeholder = '演出/艺人/场馆'/>
					</div>
					<div className = "shright">搜索</div>
				</div>
				<div className = "serchContent"></div>
			</div>
		)
	}
}
export default Search