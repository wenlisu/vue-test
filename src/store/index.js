import Vue from 'vue'
import Vuex from 'vuex';
import actions from './actions';
import getters from './getters';
import mutations from './mutations';
Vue.use(Vuex);
const state = {
	userInfo: null,
	login: false,
	personalImageUrl: null,
	money: 0,
	myBicycle: 0,
	robot: 0,
};
export default new Vuex.Store({
	state,
	getters,
	actions,
	mutations,
})
