<template>
    <div>
        <top-bar />
        <main class="main">
            <div class="main__container">
                <nuxt />
            </div>
        </main>
        <v-footer dark padless fixed>
            <v-card flat tile class="footer--color white--text text-center">
                <v-card-text>
                    <v-btn
                        v-for="icon in icons"
                        :key="icon"
                        class="mx-4 white--text"
                        icon
                    >
                        <v-icon size="24px">{{ icon }}</v-icon>
                    </v-btn>
                </v-card-text>
                <v-divider></v-divider>
                <v-card-text class="white--text">
                    {{ new Date().getFullYear() }} — <strong>Filip Chamier-Ciemiński</strong>
                </v-card-text>
            </v-card>
        </v-footer>
    </div>
</template>

<script>
import TopBar from '../components/TopBar.vue'
export default {
    components: {
        TopBar
    },
    data() {
        return {
            icons: [
                'mdi-facebook',
                'mdi-linkedin',
                'mdi-github-circle'
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.main {
    background-color: #cfd8dc;
    height: calc(100vh - 64px);
    .main__container {
        
    }
}
.footer--color{
    background-color: #004D40;
    width: 100%;
    text-align: center;
}
</style>
