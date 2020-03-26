<template>
	<div class="post__container">
		<transition class="post" name="fade" tag="div">
			<component :is="postComponent" />
		</transition>
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

		data() {
			return {
				post: null,
				postComponent: null
			}
		}
	}
</script>

<style lang='scss' scoped>
			blockquote {
				padding: 16px 0px;
				margin: 16px 0px;
				border: 1px solid black;
				p {
					padding: 16px;
					margin: 0;
				}
			}
	.post__container {
		margin: 18px auto;
		width: 65%;
		.frontmatter-markdown {
		}
	}
</style>