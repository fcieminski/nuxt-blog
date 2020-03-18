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
    }
    // beforeRouteLeave(to, from, next) {
    //     gsap.fromTo(
    //         '.main__aside',
    //         { opacity: 1 },
    //         {
    //             duration: 1,
    //             opacity: 0,
    //             ease: 'power2.out',
    //             onComplete: () => {
    //                 next()
    //             }
    //         }
    //     )
    // }
}
</script>
