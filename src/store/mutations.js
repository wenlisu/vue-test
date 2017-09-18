import { 
    GET_USERINFO,
    RECORD_USERINFO,
 } from './mutations_type';
 import {
    setStore
  } from '../config/untils.js';
export default {
    [GET_USERINFO](state,action){
        console.log(state,action);
    },
    // 记录用户信息
	[RECORD_USERINFO](state, info) {
		state.userInfo = info;
		state.login = true;
		setStore('userId', info.userId);
		setStore('token', info.token);
	},
}