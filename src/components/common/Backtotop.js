import React, {
    Component
} from 'react';
import './Backtotop.scss';

class Backtotop extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    };
    render() {
        return (
            <div className="backtotop" 
                onClick={this.backtotop.bind(this)}
            >
                <i className="fa fa-arrow-up fa-2x" aria-hidden="true"></i>
            </div>
        )
    };
    backtotop(){
        window.scrollTo(0,0);
    };
}
export default Backtotop