<template>
    <div>
        <v-app-bar fixed color="#00695C" dark>
            <v-app-bar-nav-icon></v-app-bar-nav-icon>
            <v-toolbar-title class="white--text"
                >Page title</v-toolbar-title
            >
            <v-spacer></v-spacer>
            <v-btn icon>
                <v-icon>mdi-heart</v-icon>
            </v-btn>
            <v-menu
                light
                :close-on-content-click="false"
                transition="slide-x-transition"
                bottom
                right
            >
                <template v-slot:activator="{ on }">
                    <v-btn v-on="on" icon>
                        <v-icon>mdi-magnify</v-icon>
                    </v-btn>
                </template>

                <v-list>
                    <v-list-item>
                        <v-text-field
                            outlined
                            v-model="searchText"
                            label="Szukaj"
                            clearable
                            hide-details
                            @input="searchPosts(searchText)"
                        />
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-app-bar>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
    name: 'TopBar',
    data() {
        return {
            searchText: ''
        }
    },
    components: {},
    created() {},
    computed: {},
    methods: {
        ...mapActions(['searchPosts'])
    }
}
</script>

<style lang='sass' scoped>

</style>