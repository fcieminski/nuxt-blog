<template>
	<div v-if="post" class="post__container">
		<transition class="post" name="fade" tag="div">
			<component :is="postComponent" />
		</transition>

		<v-list light class="content__box">
			<v-list-item
				ripple
				class="cp"
				v-for="(content, key, index) in post.tableOfContent"
				:key="index"
			>
				<v-list-item-content @click="goToElement(key)">
					<v-list-item-title>{{ content }}</v-list-item-title>
				</v-list-item-content>
			</v-list-item>
		</v-list>
		<v-fab-transition>
			<v-btn v-if="scrolled" color="#e68139" fab dark small fixed bottom right @click="goUp">
				<v-icon>mdi-chevron-up</v-icon>
			</v-btn>
		</v-fab-transition>
	</div>
</template>

<script>
	export default {
		name: 'PostPage',
		layout: 'postlayout',

		async created() {
			try {
				let post = await import(`~/content/${this.$route.params.post}.md`)
				this.post = post.attributes
				this.postComponent = post.vue.component
			} catch (err) {
				console.debug(err)
			}
		},
		mounted() {
			this.html = document.querySelector('html')
			window.addEventListener('scroll', this.scrollPosition)
		},

		data() {
			return {
				post: null,
				postComponent: null,
				currentActive: null,
				scrolled: false,
				currentScrollPosition: 0
			}
		},

		computed: {
			// getAnchorElements() {
			// 	let mappedElements = Object.keys(this.post.tableOfContent).reduce((prev, ele, index, arr) => {
			// 		const element = document.querySelector(ele)
			// 		if (element) {
			// 			const position = element.offsetTop
			// 			const offset = 30
			// 			prev[ele] = position + offset
			// 		}
			// 		return prev
			// 	}, {})
			// 	return Object.entries(mappedElements).map((ele, index, arr) => {
			// 		if (index + 1 !== arr.length) {
			// 			return {
			// 				[ele[0]]: this.currentScrollPosition > ele[1] && this.currentScrollPosition < arr[index + 1][1]
			// 			}
			// 		} else {
			// 			return {
			// 				[ele[0]]: true
			// 			}
			// 		}
			// 	})
			// }
		},

		methods: {
			goToElement(key) {
				const element = document.querySelector(key)
				const offset = 20
				const bodyRect = document.body.getBoundingClientRect().top
				const elementRect = element.getBoundingClientRect().top

				const possitionToScroll = elementRect - bodyRect - offset

				window.scrollTo({ top: possitionToScroll, behavior: 'smooth' })
			},
			scrollPosition() {
				if (this.html.scrollTop >= this.html.scrollTopMax / 2) {
					this.scrolled = true
				} else {
					this.scrolled = false
				}
				this.currentScrollPosition = window.scrollY
			},
			goUp() {
				this.html.scrollTo({ top: 0, behavior: 'smooth' })
			}
		},
		destroyed() {
			window.removeEventListener('scroll', this.scrollPosition)
		}
	}
</script>

<style lang="scss" scoped>
	.post__container {
		margin: 18px auto;
		width: 65%;
	}

	.content__box {
		top: 70px;
		position: fixed;
		left: 10px;
		border-radius: 4px;
	}
</style>
