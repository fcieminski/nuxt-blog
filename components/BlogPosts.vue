<template>
    <div>
        <div
            class="ma-4 post__highlight d-flex justify-center"
            v-for="post in posts"
            :key="post.id"
        >
            <div>
                <v-img
                    class="white--text align-end"
                    height="200px"
                    width="200px"
                    :src="post.image"
                ></v-img>
            </div>
            <div>
                <p>{{ post.name }}</p>
                <div>{{ post.desc.substr(1, 30) }}</div>
                <div>{{ post.desc.substr(1, 100) }}...</div>
                <v-card-actions>
                    <v-btn color="orange" text>
                        Share
                    </v-btn>

                    <v-btn color="orange" text>
                        Explore
                    </v-btn>
                </v-card-actions>
            </div>
        </div>
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