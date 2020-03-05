<template>
    <div>
        <v-app-bar color="#00695C" dark>
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
            <v-toolbar-title>Page title</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon>
                <v-icon>mdi-heart</v-icon>
            </v-btn>

            <v-btn icon>
                <v-icon>mdi-magnify</v-icon>
            </v-btn>
        </v-app-bar>
    </div>
</template>

<script>
export default {
    name: 'TopBar',
    data() {
        return {}
    },
    components: {},
    created() {},
    computed: {},
    methods: {}
}
</script>

<style lang='sass' scoped>

</style>