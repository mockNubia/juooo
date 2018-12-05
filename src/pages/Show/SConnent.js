import React, {
    Component
} from 'react';


class SConnent extends Component {
    constructor(props) {
        super(props)
        this.props = props;
        console.log(this.props)
        this.state = {
            alllist:[],
            loading:false,
            page:0,
            total:''
        }
    }
    
    GetInfo(){
        var str=window.location.hash;
        var arr1 = str.split("/",3)[2]
        console.log(arr1)
        // var arr1=35;
        this.$post({
            url:'/jc/Show/getShowList/', 
            data:{
                city_id: -1,
                category: 0,
                keywords:'',
                activity_id: 0,
                sort_type: 0,
                page: this.state.page+1
            }})
        .then((res)=>{
            this.setState({
                alllist: res.data.data.list,
                total:res.data.data.total
            })
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    render(){
        return (
            <div className="con">
                <ul className="con_ul">
                {
					(() => {
						return this.state.alllist.map((item, index) => {
							return (
								<li key={index} className="con_li">
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
            </div>
        )
    }
    componentDidMount(){
        this.GetInfo()
       
    }
}

export default SConnent;