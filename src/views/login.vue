<template>
    <div class="login">
        <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
        <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
        <div class="loginButton">
            <mt-button type="primary" size="large" @click.native="handleClick">登录</mt-button>
        </div>
    </div>
</template>
<script>
export default {
    name: 'login',
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {
        handleClick() {

        }
    }
}
</script>
<style>
.login,
.loginButton {
    margin-top: 15px;
}
</style>
