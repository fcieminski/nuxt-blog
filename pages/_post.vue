<template>
    <div>HELOOOOOOOOO {{ $route.params.post }}</div>
</template>

<script>
import data from '~/static/MOCK_DATA'
export default {
    name: 'PostPage',

    data() {
        return {
            posts: data
        }
    },
    components: {},
    created() {},
    computed: {
        currentPost() {
            return this.posts.find(post => post.id === parseInt(this.$route.params.post))
        }
    },
    methods: {}
}
</script>

<style lang='scss' scoped>
</style>