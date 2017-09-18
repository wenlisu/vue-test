<template>
    <mt-cell :title="name" is-link style="border-bottom:1px solid #ccc;">
        <img slot="icon" :src="img" width="20" height="20">
        <span style="color:#ccc;" v-if="data">{{ data }}元</span>
    </mt-cell>
</template>

<script>
export default {
    name: 'list',
    data() {
        return {

        }
    },
    props: ['name', 'img', 'data'],
    components: {}
}
</script>
<style lang="scss" >
@import '../style/common';
.mint-cell-text {
    color: $baseColor;
    margin-left: 5px;
}
.mint-cell-value.is-link{
    margin-right: 20px;
}
.mint-cell-allow-right::after{
    border-color: $baseColor;
    width:8px;
    height:8px;
}
</style>



