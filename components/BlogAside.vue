<template>
    <aside class="aside__container">
        <div class="main__aside"></div>
    </aside>
</template>

<script>
export default {
    name: 'BlogAside',
    data() {
        return {}
    },
    components: {},
    created() {},
    computed: {},
    methods: {}
}
</script>

<style lang='scss' scoped>
.aside__container {
    flex: 0 0 400px;
    .main__aside {
        background-color: $main-light-accent;
        position: fixed;
        width: 400px;
        height: 100vh;
        width: 100%;
    }
}
</style>
