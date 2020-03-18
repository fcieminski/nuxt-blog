<template>
    <div>
        <top-bar />
        <div class="main__box">
            <main class="main">
                <div class="main__container">
                    <nuxt />
                </div>
                <blog-aside />
            </main>
        </div>
        <blog-footer />
    </div>
</template>

<script>
import TopBar from '../components/TopBar.vue'
import BlogFooter from '../components/BlogFooter.vue'
import BlogAside from '../components/BlogAside.vue'
export default {
    components: {
        TopBar,
        BlogFooter,
        BlogAside
    },
    data() {
        return {}
    }
}
</script>

<style lang="scss" scoped>
.main__box {
    background-color: white;
    width: 100vw;
    overflow: hidden;
    .main {
        display: flex;
        justify-content: space-between;
        padding-left: 20px;
        padding-right: 20px;
        margin: 56px auto;
        width: 90%;
        .main__container {
            width: 60vw;
        }
    }
}
</style>
