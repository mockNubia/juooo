import React,{ Component } from 'react';
import './Show.scss'
import Tabbar from './../../components/common/Tabbar.js'
import SHeader from './SHeader.js'


class Show extends Component {
	constructor(props) {
		super(props)
		this.props = props;
	}
	render(){
		return(
			<div className = "show">
				<SHeader  history={this.props.history} />
				
				{/* <Route path="/show/" exact component={SConnent} /> */}
				{/* <Route path="/show/" component={SConnent} /> */}
               
				<Tabbar checkedId = "t2"/>
			</div>
		)
	}
}
export default Show;