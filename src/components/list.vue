<template>
    <mt-cell :title="name"  is-link>
        <img slot="icon" :src="img" width="24" height="24" >
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
        props: ['name','img','data'],
        components: {}
    }
</script>


