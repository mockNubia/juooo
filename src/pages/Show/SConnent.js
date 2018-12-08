import React, {
    Component
} from 'react';
import { connect } from 'react-redux';

class SConnent extends Component {
    constructor(props) {
        super(props)
        this.props = props;
        this.state = {
            alllist:[],
            loading:false,
            page:0,
            total:2000,
            num:20,
            isLoad:"点击加载更多"
        }
    };
    componentWillMount(){
        this.loadmore();
    };
    getmore(){
        if(this.state.page!==Math.ceil(this.state.total/this.state.num)){
            this.loadmore()
        }else{
            this.setState({
                isLoad:"没有更多了"
            })
        }
    }
    loadmore(){
        var caid = (this.props.props.history.location.search).split('=')[2];
        this.$post({
            url:'/jc/Show/getShowList/',
            data:{
                city_id: -1,
                category: caid,
                keywords:'',
                activity_id: 0,
                sort_type: 0,
                page: this.state.page+1
            }
        })
        .then((res)=>{
            this.setState({
                alllist: this.state.alllist.concat(res.data.data.list),
                total:res.data.data.total,
                page:this.state.page +1
            })
        })
        .catch((err)=>{
            console.log(err)
        })
    }
	toDetail(params,id,num){
		localStorage.detailList=JSON.stringify(params);
		localStorage.sid = id;
		localStorage.num = num;
		this.props.props.history.push('/detail/'+id);
	}
    render(){
        return (
            <div className="con">
                <ul className="con_ul">
                {
					(() => {
						return this.state.alllist.map((item, index) => {
							return (
								<li key={index} className="con_li"
									onClick = {this.toDetail.bind(this,{
													img:'http://image.juooo.com'+item.pic,
													title:item.schedular_name,
													time:item.show_time,
													dress:item.v_name,
													price:item.min_price+" - "+item.max_price
												},
												item.id,
												item.show_id
												)}
								>
                                    <div className="img">
                                        <img src={'http://image.juooo.com'+item.pic} alt="" /> 
                                    </div>
                                    <div className="sect">
                                        <p className="schedular_name">{item.schedular_name}</p>
                                        <p className="show_time">{item.show_time}</p>
                                        <p className="c_name">({item.c_name}){item.v_name}</p>
                                        <p className="price">￥{item.min_price}-{item.max_price}</p>
                                    </div>
								</li>
							)
						})
					})()
				}
                </ul>
                <div className="getmore">
                    <span onClick={this.getmore.bind(this)}>{this.state.isLoad}</span>
                </div>
            </div>
        )
    };
}

export default connect((state) => {
    return state
}, (dispatch) => {
    return {
        onIncreaseClick() {
			dispatch({
			})
        }
    }
})(SConnent);