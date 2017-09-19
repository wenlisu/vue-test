<template>
    <div>
        <mt-header title="个人中心">
            <router-link to="/" slot="left">
                <mt-button icon="back"></mt-button>
            </router-link>
        </mt-header>
        <div class="headerImg flex justifyContentCenter alignItemsCenter">
            <img :src="personalImgUrl" alt="" class="personalImg">
        </div>
        <ul class="listDate flexDirectionRow">
            <li class="flex1 justifyContentCenter alignItemsCenter">我的单车
                <span>{{myBicycleNumber}}</span>
            </li>
            <li class="flex1 justifyContentCenter alignItemsCenter">我的售纸机
                <span>{{robotNumber}}</span>
            </li>
        </ul>
        <list :name="title1" :img="imgUrl1" :data="data1"></list>
        <list :name="title2" :img="imgUrl2" :data="data2"></list>
        <list :name="title3" :img="imgUrl3" :data="data3"></list>
        <list :name="title4" :img="imgUrl4" :data="data4"></list>
    </div>
</template>

<script>
import { getUser } from '../service';
import { mapState, mapMutations } from 'vuex';
import list from '@/components/list';
export default {
    name: 'personalCenter',
    data() {
        return {
            personalImgUrl: '/static/images/asset-cash-icon1.png',
            myBicycleNumber:0,
            robotNumber:0,
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
        this.getUserInfo();
        this.data1 = this.money;
        this.myBicycleNumber = this.myBicycle;
        this.robotNumber = this.robot;
    },
    computed: {
        ...mapState([
            'userInfo','personalImageUrl','money','myBicycle','robot'
        ]),
    },
    methods: {
        ...mapMutations([
            'GET_USERINFO',
        ]),
        async getUserInfo() {
            console.log('this',this);
            let requite = await getUser(this.userInfo);
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
