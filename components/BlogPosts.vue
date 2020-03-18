<template>
    <div>
        <div v-if="searchPosts.length !== 0">
            <div
                class="ma-4 post__highlight d-flex justify-center"
                v-for="post in searchPosts"
                :key="post.id"
            >
                <div class="highlight__content">
                    <div class="d-flex">
                        <div>
                            <v-img
                                class="content__image white--text border--radius align-end"
                                height="200px"
                                width="300px"
                                :src="post.image"
                            ></v-img>
                        </div>
                        <div class="content__main">
                            <div class="main__title">
                                {{ post.desc.substr(1, 30) }}
                            </div>
                            <div class="main__description">
                                {{ post.desc.substr(1, 300) }}...
                            </div>
                            <div class="content__actions">
                                <nuxt-link :to="`/${post.id}`">
                                    <v-btn color="#e68139" depressed dark>
                                        Czytaj
                                    </v-btn>
                                </nuxt-link>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="content__footer">
                    <div class="d-flex justify-center align-center pr">
                        <div class="author--highlight"></div>
                        <v-avatar size="36px">
                            <img :src="post.image" alt="author" />
                        </v-avatar>
                        <p class="footer__author">{{ post.name }}</p>
                    </div>
                    <span class="footer__date">{{ post.date }}</span>
                </div>
            </div>
        </div>
        <div v-else>
            Brak postów!
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
    computed: {
        searchPosts() {
            let searchText = this.$store.state.searchText
                ? this.$store.state.searchText
                : ''
            return this.posts.filter(post =>
                post.desc.toLowerCase().includes(searchText.toLowerCase())
            )
        }
    },
    methods: {}
}
</script>

<style lang='scss' scoped>
.post__highlight {
    transition: all 0.1s;
    color: #363636;
    flex-direction: column;
    .highlight__content {
        // border: 2px solid white;
        box-shadow: 0 2px 4px rgba(3, 27, 78, 0.06);
        border: 1px solid rgba(0, 0, 0, 0.05);
        border-radius: 4px;
        padding: 20px;
        .content__image {
        }
        .content__main {
            margin-left: 20px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .main__title {
                font-weight: 700;
                font-size: 2rem;
                margin-bottom: 20px;
                color: $secondary-color;
            }
            .main__description {
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

.author--highlight {
    transition: all 0.5s;
    background-color: #0b7e6e1c;
    width: 30px;
    height: 30px;
    position: absolute;
    border-radius: 100%;
    z-index: 0;
    transform: scale(0);
    left: 2px;
}
</style>