<template>
    <div>
        <top-bar />
        <main class="main">
            <div class="main__container">
                <nuxt />
            </div>
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
    .main__container {
        margin: 0 auto;
        width: 1200px;
        height: calc(100vh - 64px);
    }
}
</style>
