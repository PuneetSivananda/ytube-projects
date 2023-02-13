<script>
	import Title from '$lib/title.svelte';
</script>

<header>
	<div class="links">
		<Title title="About" />
		<div class="links--section">
			<a href="/">Home</a>
			<a href="/about">About</a>
			<a href="/guides">Guides</a>
		</div>
	</div>
</header>
<slot />
<footer>
	<p>Copyright 2022 Ninja gaming guide</p>
</footer>

<style lang="scss">
	.links {
		display: flex;
	}
	.links .links--section {
		padding-top: 30px;
		margin: 0 20px;
	}
</style>
