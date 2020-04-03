<template>
	<aside id="aside--container" class="aside__container">
		<div id="main--aside" class="main__aside">
			<div class="author">
				<div class="author__image">
					<img src="~static/author.png" alt="" />
				</div>
				<p class="author__name">
					Filip Chamier-Ciemiński
				</p>
			</div>
			<div class="menu">
				<div>
					o mnie
				</div>
				<div>
					posty
				</div>
				<div>
					kontakt
				</div>
			</div>
		</div>
	</aside>
</template>

<script>
	export default {
		name: 'BlogAside',
		data() {
			return {}
		},
		components: {},
		created() {},
		computed: {
			fakeArr() {
				return new Array(14).fill('Loremasd')
			}
		},
		methods: {}
	}
</script>

<style lang='scss' scoped>
	.aside__container {
		flex: 0 0 400px;
		.main__aside {
			background: rgba(48,150,176,1);
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
				.author__description {
					color: white;
				}
			}
			.tags {
				padding: 16px;
				.tags__tag {
					margin: 4px;
				}
			}
			.menu {
                margin-top: 32px;
				div {
                    width: 100%;
                    text-align: center;
                    font-size: 1.5rem;
					color: white;
                    margin: 16px 0;
                    padding: 16px 0;
                    cursor: pointer;
                    &:hover{
                        background-color: white;
                        color: black;
                    }
				}
			}
		}
	}
</style>
