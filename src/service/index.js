import {
  getStore
} from '../config/untils.js';
import {
  axiosPost,
  axiosGet
} from '../config/axios.js';
/**
 * 获取用户信息
 */
export const getUser = (userInfo) => axiosPost('/api/getUserInfo', {
  ...userInfo
});

/**
 * 登录
 */
export const sentLogin = (phone, password) => axiosPost('/api/login', {
  phone,
  password
});
