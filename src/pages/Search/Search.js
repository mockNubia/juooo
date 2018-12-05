import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Search.scss'
class Search extends Component {
	constructor(props){
		super(props)
		this.state = {
			hotSearch:[
				{id:'hs1',title:'摇滚红与黑',path:'/show?cid=-1&k='},
				{id:'hs2',title:'贝隆夫人',path:'/show?cid=-1&k='},
				{id:'hs3',title:'《猫》',path:'/show?cid=-1&k='},
				{id:'hs4',title:'魔戒',path:'/show?cid=-1&k='},
				{id:'hs5',title:'小野丽莎',path:'/show?cid=-1&k='},
				{id:'hs6',title:'周慧敏',path:'/show?cid=-1&k='},
				{id:'hs7',title:'陈慧娴',path:'/show?cid=-1&k='},
				{id:'hs8',title:'V.K克',path:'/show?cid=-1&k='},
				{id:'hs9',title:'三体',path:'/show?cid=-1&k='},
			],
			searchHistory:[]
		}
	}
	goBack(){
		window.history.go(-1);
	}
	searchKey(){
		console.log(this)
		console.log(this.refs.input.value);
		this.props.history.push('/show?cid=-1&k='+this.refs.input.value)
		
	}
	clearHistory(){
		this.$get({
			url:'/jc/Search/delKeyWordHis',
			data:{
				
			}
		})
	}
	componentWillMount(){
		this.$post({
			url:'/jc/Search/getKeywordsList',
			data:{
			}
		})
		.then(res=>{
			this.setState({
				searchHistory:res.data.data
			})
		})
	}
	render(){
		return (
			<div className = "search">
				<div className = "searchHeader borderBottom">
					<i className = "shleft fa fa-lg fa-angle-left" onClick = {this.goBack}></i>
					<div className = "shcenter">
						<i className = 'fa fa-search searchIco'></i>
						<input type = 'text' ref = 'input' placeholder = '演出/艺人/场馆'/>
					</div>
					<div className = "shright" onClick = {this.searchKey.bind(this)}>搜索</div>
				</div>
				<div className = "serchContent">
					<div className = "allSearch">
						<p className = "allSearchTitle">大家都在找</p>
						<div className = "searchList">
						{
							(()=>{
								return this.state.hotSearch.map(item=>{
									return(
										<Link 
											to = {item.path+item.title} 
											key = {item.id}
											className = "searchItem"
										>
											{item.title}
										</Link>
									)
								})
							})()
						}
							 
						</div>
						<div className = "recentSearch"
							style = {{display:this.state.searchHistory > 0? 'block':'none'}}>
							<p className = 'allSearchTitle'>最近搜索</p>
							<div className = 'searchHistory'>
								<p className = 'shistory borderBottom'>神与神<i>X</i></p>
							</div>
							<p className = 'clearHistory' onClick = {this.clearHistory.bind(this)}>清除搜索记录</p>
						</div>
					</div>
					
				</div>
			</div>
		)
	}
}
export default Search