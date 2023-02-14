<script>
	import '../styles/global.css';
</script>

<slot />

<style>
	.links {
		display: flex;
		flex-direction: row;
	}
	header {
		display: flex;
		justify-content: center;
	}
	main {
		max-width: 960px;
		margin: 20px auto;
	}
</style>
