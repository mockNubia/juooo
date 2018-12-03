
import { Component } from 'react'
import axios from 'axios'
axios.defaults.crossDomain = true
axios.defaults.withCredentials  = true
const Get = ({url,data})=>{
	return axios.get(url,{
		params:data
	})
}
Component.prototype.$get = Get;
export default Get;