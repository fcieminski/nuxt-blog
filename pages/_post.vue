<template>
	<div v-if="post" class="post__container">
		<transition class="post" name="fade" tag="div">
			<component :is="postComponent" />
		</transition>

		<v-list light class="content__box">
			<v-list-item
				:input-value="currentActive"
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
        
        props: {
            currentScrollPosition: {
                type: Number,
                default: 0
            }
        },

		data() {
			return {
				post: null,
				postComponent: null,
				currentActive: null
			}
		},

		methods: {
			goToElement(key) {
				const element = document.querySelector(key)
				const offset = 20
				const bodyRect = document.body.getBoundingClientRect().top
				const elementRect = element.getBoundingClientRect().top

				const possitionToScroll = elementRect - bodyRect - offset

				window.scrollTo({ top: possitionToScroll, behavior: 'smooth' })
			}
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
