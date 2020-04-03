<template>
    <div class="post__header">
        <div>{{author}}</div>
        <h2>{{title}}</h2>
        <div>{{date}}</div>
    </div>

</template>

<script>
export default {
    name: 'PostHeader',
    data() {
        return{
    }
    },
    props: {
        author: {
            type: String,
            default: ''
        },
        
        title: {
            type: String,
            default: ''
        },
        
        date: {
            type: String,
            default: ''
        },
        
    },
    components: {
    },
    created(){
    },
    computed: {
    },
    methods: {
    },
    }
</script>

<style lang='scss' scoped>
.post__header{
    padding-bottom: 8px;
    margin-top: 8px;
    border-bottom: 1px solid $secondary-dark-accent;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>