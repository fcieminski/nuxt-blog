<template>
    <aside class="aside__container">
        <div class="main__aside">
            <div class="author">
                <div class="author__image">
                    <img src="~static/author.png" alt="" />
                </div>
                <p class="author__name">
                    Filip Chamier-Ciemiński
                </p>
                <div class="underline"></div>
                <p class="author__description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatem facere qui, eos Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Voluptatem facere qui, eos
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptatem facere qui, eos
                </p>
            </div>
            <div class="tags">
                <v-chip class="tags__tag" color="#e68139" text-color="rgba(255, 255, 255, 0.87)" v-for="(a,index) in fakeArr" :key="index">{{a}}</v-chip>
            </div>
        </div>
    </aside>
</template>

<script>
export default {
    name: 'BlogAside',
    data() {
        return {
            
        }
    },
    components: {},
    created() {},
    computed: {
        fakeArr(){
           return new Array(14).fill('Loremasd');
        }
    },
    methods: {}
}
</script>

<style lang='scss' scoped>
.aside__container {
    flex: 0 0 400px;
    .main__aside {
        background-color: $main-light-accent;
        position: fixed;
        width: 420px;
        height: 100vh;
        right: 0;
        margin-bottom: 56px;
        .author {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding: 16px;
            margin-top: 36px;
            .author__image {
                border-radius: 100%;
                overflow: hidden;
                width: 250px;
                height: 250px;
                img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
            }
            .author__name {
                font-weight: 700;
                font-size: 2rem;
                color: white;
                margin-top: 16px;
            }
            .author__description{
                color: white;
            }
        }
        .tags{
            padding: 16px;
.tags__tag{
   margin: 4px ;
}
        }
    }
}
</style>
