
import { Component } from 'react'
import axios from 'axios'
import qs from 'querystring'
axios.defaults.crossDomain = true
axios.defaults.withCredentials  = true
const config = { headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
}};
const Post = ({url, data}) => {
    return axios.post(url, qs.stringify(data), config)
}
Component.prototype.$post = Post;

export default Post