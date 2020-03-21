<template>
    <v-app>
        <top-bar />
        <div class="main__box">
            <main class="main">
                <transition tag="div" class="main__container" name="fade">
                    <nuxt />
                </transition>
                <blog-aside />
            </main>
        </div>
        <blog-footer />
    </v-app>
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
    height: 100vh;
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

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
    opacity: 0;
}

</style>
