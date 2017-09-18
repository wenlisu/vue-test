import {
  getStore
} from '../config/untils.js';
import {
  fetchPost,
  fetchGet
} from '../config/fetch.js';
/**
 * 获取用户信息
 */
export const getUser = () => fetchPost('/getUserInfo', {
  userId: getStore('userId'),
  token: getStore('token')
});

/**
 * 登录
 */
export const login = (phone, password) => fetchPost('/login', {
  phone,
  password
});
