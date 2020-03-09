<template>
    <div>
        <div
            class="ma-4 post__highlight d-flex justify-center"
            v-for="post in posts"
            :key="post.id"
        >
            <div class="highlight__content">
                <div>
                    <v-img
                        class="white--text align-end"
                        height="200px"
                        width="300px"
                        :src="post.image"
                    ></v-img>
                </div>
                <div class="content__main">
                    <div class="content__title">
                        {{ post.desc.substr(1, 30) }}
                    </div>
                    <div>{{ post.desc.substr(1, 300) }}...</div>
                </div>
            </div>
            <div class="content__footer">
                <!-- <v-btn color="orange" text>
                    Share
                </v-btn>

                <v-btn color="orange" text>
                    Explore
                </v-btn> -->
                <div class="d-flex justify-center align-center">
                    <v-avatar size="36px"
                        ><img :src="post.image" alt=""
                    /></v-avatar>
                    <p class="footer__author">{{ post.name }}</p>
                </div>
                <span class="footer__date">{{ post.date }}</span>
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
    color: #363636;
    flex-direction: column;
    .highlight__content {
        // border: 2px solid white;
        box-shadow: 0 2px 4px rgba(3, 27, 78, 0.06);
        border: 1px solid rgba(0, 0, 0, 0.05);
        border-radius: 4px;
        padding: 20px;
        display: flex;
        justify-content: space-between;
        .content__main {
            margin-left: 20px;
        }
        .content__author {
        }
        .content__title {
            font-weight: 700;
            font-size: 2rem;
            margin-bottom: 20px;
            color: #a2000f;
        }
    }
    .content__footer {
        margin-top: -15px;
        margin-left: -15px;
        display: flex;
        align-items: center;
        .footer__author {
            margin-right: 16px;
            margin-left: 8px;
            margin-top: 16px;
            font-size: 0.9rem;
        }
        .footer__date {
            margin-top: 16px;
            font-size: 0.9rem;
        }
    }
}
</style>