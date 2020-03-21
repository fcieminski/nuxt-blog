<template>
    <v-app>
        <top-bar />
        <div class="main__box">
            <main class="main">
                <transition tag="div" class="main__container" name="fade">
                    <nuxt />
                </transition>
            </main>
        </div>

        <div
            :class="{ 'drawer--show': iconDrawer }"
            class="button__box"
            ref="drawer"
        >
            <div class="d-flex flex-column">
                <v-btn v-for="icon in icons" :key="icon" icon>
                    <v-icon>{{ icon }}</v-icon>
                </v-btn>
            </div>
            <v-btn @click="iconDrawer = !iconDrawer" icon>
                <v-icon>mdi-chevron-right</v-icon>
            </v-btn>
        </div>
        <v-fab-transition>
            <v-btn
                v-if="scrolled"
                color="#e68139"
                fab
                dark
                small
                fixed
                bottom
                right
                @click="goUp"
            >
                <v-icon>mdi-chevron-up</v-icon>
            </v-btn>
        </v-fab-transition>
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
        return {
            scrolled: false,
            html: null,
            icons: ['mdi-facebook', 'mdi-linkedin', 'mdi-github'],
            iconDrawer: false
        }
    },

    mounted() {
        this.html = document.querySelector('html')
        window.addEventListener('scroll', this.scrollPosition)
    },

    methods: {
        scrollPosition() {
            if (this.html.scrollTop >= this.html.scrollTopMax / 2) {
                this.scrolled = true
            } else {
                this.scrolled = false
            }
        },
        goUp() {
            this.html.scrollTo({ top: 0, behavior: 'smooth' })
        }
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
.button__box {
    position: fixed;
    padding: 8px 0;
    display: flex;
    background-color: $secondary-light-accent;
    align-items: center;
    top: 55vh;
    left: -40px;
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
    transition: left 0.4s;
    &.drawer--show {
        left: 0px;
    }
}
</style>
