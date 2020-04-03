<template>
	<v-app>
		<div class="main__box">
			<main class="main">
				<transition tag="div" class="main__container" name="fade">
					<nuxt :current-scroll-position="currentScrollPosition" />
				</transition>
			</main>
		</div>
		<div :class="{ 'drawer--show': iconDrawer }" class="button__box" ref="drawer">
			<div class="d-flex flex-column">
				<v-btn v-for="icon in icons" :key="icon" icon>
					<v-icon>{{ icon }}</v-icon>
				</v-btn>
			</div>
			<v-btn @click="iconDrawer = !iconDrawer" icon>
				<v-icon>mdi-chevron-right</v-icon>
			</v-btn>
		</div>
	</v-app>
</template>

<script>
	import TopBar from '../components/TopBar.vue'
	import BlogFooter from '../components/BlogFooter.vue'
	import BlogAside from '../components/BlogAside.vue'
	export default {
		components: {
			TopBar,
			BlogFooter,
			BlogAside
		},

		data() {
			return {
				scrolled: false,
				html: null,
				icons: ['mdi-facebook', 'mdi-linkedin', 'mdi-github'],
				iconDrawer: false,
				currentScrollPosition: 0
			}
		},
	}
</script>

<style lang="scss" scoped>
	.main__box {
		background-color: white;
		width: 100vw;
		height: 100vh;
		.main {
			display: flex;
			justify-content: space-between;
			padding-left: 20px;
			padding-right: 20px;
			margin: 0 auto;
			width: 90%;
			.main__container {
				width: 60vw;
			}
		}
	}
	.button__box {
		position: fixed;
		padding: 8px 0;
		display: flex;
		background-color: $secondary-light-accent;
		align-items: center;
		top: 55vh;
		left: -40px;
		border-top-right-radius: 4px;
		border-bottom-right-radius: 4px;
		transition: left 0.4s;
		&.drawer--show {
			left: 0px;
		}
	}
</style>
