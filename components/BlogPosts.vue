<template>
    <div>
        <div
            class="ma-4 post__highlight d-flex justify-center"
            v-for="post in posts"
            :key="post.id"
        >
            <div class="highlight__content">
                <div class="d-flex">
                    <div>
                        <v-img
                            class="white--text border--radius align-end"
                            height="200px"
                            width="300px"
                            :src="post.image"
                        ></v-img>
                    </div>
                    <div class="content__main">
                        <div class="main__title">
                            {{ post.desc.substr(1, 30) }}
                        </div>
                        <div class="main__description">{{ post.desc.substr(1, 300) }}...</div>
                    </div>
                </div>
                <div class="content__actions">
                    <v-btn color="#e68139" depressed dark>
                        Czytaj
                    </v-btn>
                </div>
            </div>
            <div class="content__footer">
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
        .content__main {
            margin-left: 20px;
            .main__title {
                font-weight: 700;
                font-size: 2rem;
                margin-bottom: 20px;
                color: $secondary-color;
            }
            .main__description{
                max-height: 110px;
            }
        }
        .content__author {
        }
        .content__actions {
            text-align: right;
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