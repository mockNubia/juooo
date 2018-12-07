import React from 'react';
import ReactDOM from 'react-dom';
import './stylesheet/base.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './modules/get';
import './modules/post';
import './modules/rem';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore((state = {
    isLogin:false,
<<<<<<< HEAD
	isShowShade:false,
=======
    isShade:false,
>>>>>>> 6447e3c352b828d7a3398e6b44a97bce82e931d7
    isSort:false
}, action) => {
    switch (action.type) {
        case 'LOGIN':
            return Object.assign({},state,{
                isLogin:action.isLogin
            })
<<<<<<< HEAD
		case 'showShade':
			return Object.assign({},state,{
				isShowShade:action.isShowShade
			})
=======
>>>>>>> 6447e3c352b828d7a3398e6b44a97bce82e931d7
        case 'SORT':
            return Object.assign({},state,{
                isSort:action.isSort
            })
        default:
            return state
    }
})

ReactDOM.render(
    <Provider store={store}>
    <App /></Provider>, 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
