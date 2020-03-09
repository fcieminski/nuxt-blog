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
    .main {
        display: flex;
        justify-content: space-between;
        padding-left: 20px;
        padding-right: 20px;
        margin-left: auto;
        margin-right: auto;
        margin-top: 56px;
        width: 90%;
        .main__container {
            // width: calc(100vw - 400px);
        }
    }
}
</style>
