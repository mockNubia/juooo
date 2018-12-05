import React,{ Component } from 'react';
import './Show.scss'

class SHeader extends Component {
    constructor(props) {
		super(props)
		this.props = props;
        this.state = {
			nav: 0,
			navs: [{
				title: "全部",
				href: "/show/all/",
				category: 0
			}, {
				title: "演唱会",
				href: "/show/vocalconcert/",
				category: 35
			}, {
				title: "音乐会",
				href: "/show/musicale/",
				category: 36
			}, {
				title: "话剧歌剧",
				href: "/show/drama/",
				category: 37
            }, {
				title: "儿童亲子",
				href: "/show/children/",
				category: 38
            }, {
				title: "音乐剧",
				href: "/show/melodrama/",
				category: 79
            }, {
				title: "舞蹈芭蕾",
				href: "/show/ballet/",
				category: 86
            }, {
				title: "戏曲综艺",
				href: "/show/variety/",
				category: 91
            }, {
				title: "展览",
				href: "/show/exhibition/",
				category: 99
            }]
        };
    };
    navigateTo(index, e) {
		this.setState({
			nav: index
		})
		this.props.history.push(this.state.navs[index].href)
	};
	render(){
		return(
			<div className="show_header">
                <div className="show_header_top">
                    <div className="fl">
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
									<li onClick={
										this.navigateTo.bind(this, index)
										
									} key={index} className={
										index === this.state.nav ? "active" : ""
									}>
										<span>
											{item.title}<em>{item.category}</em>
										</span>
									</li>
							    	)
						    	})
						    })()
						}
                    </ul>
                </div>
			</div>
		)
	}
}

export default SHeader;
