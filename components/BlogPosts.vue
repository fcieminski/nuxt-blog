<template>
    <div>
        <v-card
            class="mb-4 post__highlight"
            max-width="700"
            v-for="post in posts"
            :key="post.id"
        >
            <v-img
                class="white--text align-end"
                height="200px"
                :src="post.image"
            ></v-img>
            <v-card-subtitle class="pb-0">{{ post.name }}</v-card-subtitle>
            <v-card-text class="text--primary">
                <div>{{ post.desc }}</div>
            </v-card-text>
            <v-card-actions>
                <v-btn color="orange" text>
                    Share
                </v-btn>

                <v-btn color="orange" text>
                    Explore
                </v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
import data from '../static/MOCK_DATA'
export default {
    name: 'BlogPosts',
    data() {
        return {
            posts: data
        }
    },
    components: {},
    created() {},
    computed: {},
    methods: {}
}
</script>

<style lang='scss' scoped>
.post__highlight {
    margin-left: auto;
    margin-right: auto;
}
</style>