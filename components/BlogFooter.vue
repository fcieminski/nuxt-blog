<template>
    <v-footer id="footer" fixed dark padless>
        <v-card flat tile class="footer--color white--text text-center">
            <v-card-text class="d-flex justify-space align-center">
                <div class="white--text">
                    {{ new Date().getFullYear() }} —
                    <strong>Filip Chamier-Ciemiński</strong>
                </div>
                <div>
                    <v-btn
                        v-for="icon in icons"
                        :key="icon"
                        class="mx-4 white--text"
                        icon
                    >
                        <v-icon size="24px">{{ icon }}</v-icon>
                    </v-btn>
                </div>
            </v-card-text>
        </v-card>
    </v-footer>
</template>

<script>
export default {
    name: 'BlogFooter',
    data() {
        return {
            icons: ['mdi-facebook', 'mdi-linkedin', 'mdi-github']
        }
    }
}
</script>

<style lang='scss' scoped>
.footer--color {
    color: white;
    background-color: #00695c;
    width: 100%;
    text-align: center;
    .text--align {
        text-align: initial;
    }
   
}
</style>