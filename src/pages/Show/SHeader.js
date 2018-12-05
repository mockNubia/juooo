import React,{ Component } from 'react';
import {Link} from 'react-router-dom'
import './Show.scss'
import SConnent from './SConnent.js'

class SHeader extends Component {
    constructor(props) {
		super(props)
		this.props = props;
        this.state = {
			nav: 0,
			navs: [{
				title: "全部",
				href: "/show?cid=-1",
				category: 0
			}, {
				title: "演唱会",
				href: "/show?cid=-1&caid=35",
				category: 35
			}, {
				title: "音乐会",
				href: "/show?cid=-1&caid=36",
				category: 36
			}, {
				title: "话剧歌剧",
				href: "/show?cid=-1&caid=37",
				category: 37
            }, {
				title: "儿童亲子",
				href: "/show?cid=-1&caid=38",
				category: 38
            }, {
				title: "音乐剧",
				href: "/show?cid=-1&caid=79",
				category: 79
            }, {
				title: "舞蹈芭蕾",
				href: "/show?cid=-1&caid=86",
				category: 86
            }, {
				title: "戏曲综艺",
				href: "/show?cid=-1&caid=91",
				category: 91
            }, {
				title: "展览",
				href: "/show?cid=-1&caid=99",
				category: 99
            }]
        };
    };
	componentWillMount(){
		var param = (this.props.history.location.search).split('=');
		if(!param[2]){
			this.setState({nav:0});
		}else{
			this.setState({nav:Number(param[2])});
		}
		this.$post({
			url:'/jc/Show/getShowList',
			data:{
				city_id: -1,
                category: Number(param[2]),
                keywords:'',
                activity_id: 0,
                sort_type: 0,
                page: 1
			}
		})
	}
	componentDidMount(){
		
	}
	reload(){
		window.location.reload();
	}
	render(){
		return(
			<div className="show_header">
                <div className="show_header_top">
                    <div className="fl city">
                        广州<i className="fa fa-angle-down" aria-hidden="true"></i>
                    </div>
                    <div className="fl search">
                        <i className="fa fa-search" aria-hidden="true"></i>
                        <span>搜索演出、艺人或场馆</span>
                    </div>
                    <div className="fr">
                        <i className="fa fa-filter" aria-hidden="true"></i>
                    </div>
                </div>
                <div className="show_header_bottom">
				
                    <ul>
                    {
						(() => {
							return this.state.navs.map((item, index) => {
				    			return (
									<Link 
										to = {item.href}
										onClick = {this.reload}
										key={index} className={
										item.category === this.state.nav ? "active" : ""
									}>
										<span>
											{item.title}
										</span>
									</Link>
							    	)
						    	})
						    })()
						}
                    </ul>
                </div>
				<div className="splic"></div>
				<SConnent props = {this.state.nav}/>
			</div>
		)
	}
}

export default SHeader;
