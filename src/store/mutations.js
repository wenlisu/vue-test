import { GET_USERINFO } from './mutations_type';
export default {
    [GET_USERINFO](state,action){
        console.log(state,action);
    }
}