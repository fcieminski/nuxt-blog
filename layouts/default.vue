<template>
    <div>
        <top-bar />
        <main class="main">
            <div class="main__container">
                <nuxt />
            </div>
            <aside class="main__aside"></aside>
        </main>
        <blog-footer />
    </div>
</template>

<script>
import TopBar from '../components/TopBar.vue'
import BlogFooter from '../components/BlogFooter.vue'
export default {
    components: {
        TopBar,
        BlogFooter
    },
    data() {
        return {}
    }
}
</script>

<style lang="scss" scoped>
.main {
    background-color: #cfd8dc;
    display: grid;
    height: calc(100vh - 64px - 123px);
    grid-template-columns: repeat(4, 1fr);
    grid-template-areas: 'main main main aside';
    .main__container {
        grid-area: main;
        overflow-y: scroll;
        overflow-x: hidden;
    }
    .main__aside {
        grid-area: aside;
    }
}
</style>
