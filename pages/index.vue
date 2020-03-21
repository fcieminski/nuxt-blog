<template>
    <blog-posts />
</template>

<script>
import BlogPosts from '../components/BlogPosts'
import { gsap } from 'gsap'
export default {
    layout: 'default',

    components: {
        BlogPosts
    },

    mounted() {
        gsap.set('#main--aside', { x: 0 })
    },

    beforeRouteLeave(to, from, next) {
        gsap.fromTo(
            '#main--aside',
            { x: 0 },
            {
                duration: 0.5,
                x: '420px',
                ease: 'power4.inOut'
            }
        )
        gsap.fromTo(
            '#posts--container',
            { x: 0 },
            {
                duration: 0.5,
                x: '-120%',
                ease: 'power4.inOut',
                onComplete: () => {
                    next()
                }
            }
        )
    }
}
</script>
