<template>
    <div>
        <top-bar />
        <div class="main__box">
            <main class="main">
                <div class="main__container">
                    <nuxt />
                </div>
                <aside class="aside__container">
                    <div class="main__aside"></div>
                </aside>
            </main>
        </div>
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
.main__box {
    background-color: #263238;
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
        .aside__container {
            flex: 0 0 400px;
            .main__aside {
                background-color: white;
                position: fixed;
                width: 400px;
                height: 100vh;
            }
        }
    }
}
</style>
