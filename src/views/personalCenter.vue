<template>
    <div>
        <mt-header title="个人中心">
            <router-link to="/" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <div class="headerImg flex justifyContentCenter alignItemsCenter">
            <mt-spinner type="double-bounce"></mt-spinner>
        </div>
        <ul class="listDate flexDirectionRow">
            <li class="flex1 justifyContentCenter alignItemsCenter">我的单车
                <span>0</span>
            </li>
            <li class="flex1 justifyContentCenter alignItemsCenter">我的售纸机
                <span>0</span>
            </li>
        </ul>
        <list :name="title1" :img="imgUrl1" :data="data1"></list>
        <list :name="title2" :img="imgUrl2" :data="data2"></list>
        <list :name="title3" :img="imgUrl3" :data="data3"></list>
        <list :name="title4" :img="imgUrl4" :data="data4"></list>
    </div>
</template>

<script>
import list from '@/components/list';
export default {
    name: 'personalCenter',
    data() {
        return {
            title1: '资产管理',
            imgUrl1: '/static/images/personal-center-icon1.png',
            data1: '0.00',
            title2: '贝壳投资',
            imgUrl2: '/static/images/personal-center-icon2.png',
            data2: '',
            title3: '关于我们',
            imgUrl3: '/static/images/personal-center-icon3.png',
            data3: '',
            title4: '练习我们',
            imgUrl4: '/static/images/personal-center-icon4.png',
            data4: '',
        }
    },
    created: function() {
        this.count()
    },
    methods: {
        count() {
            this.$store.commit('getUserInfo');
            console.log(this.$store.state.userInfo);
        },
    },
    components: {
        list
    }
}
</script>

<style lang="scss" scoped>
@import '../style/personalCenter';
</style>
