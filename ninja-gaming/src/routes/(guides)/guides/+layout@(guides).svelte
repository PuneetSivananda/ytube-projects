<script>
	import Title from '$lib/title.svelte';
</script>

<header>
	<nav>
		<Title title="Guides" />
		<div class="links--section">
			<a href="/">Home</a>
			<a href="/about">About</a>
			<a href="/guides">Guides</a>
		</div>
	</nav>
</header>
<main>
	<slot />
</main>

<footer>
	<p>Copyright 2022 Ninja gaming guide</p>
</footer>

<style>
	header {
		text-align: center;
		background-color: rgba(0, 0, 0, 0.1);
	}
	main {
		max-width: 960px;
		margin: 20px auto;
	}
	.links--section {
		margin-left: auto;
	}

	header {
		text-align: center;
		justify-content: center;
	}
	footer {
		text-align: center;
	}
	a {
		margin: 0 10px;
	}
	nav {
		margin: 0 auto;
		display: flex;
		align-items: center;
		max-width: 960px;
	}
</style>
