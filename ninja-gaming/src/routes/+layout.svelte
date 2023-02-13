<script>
	import '../styles/global.css';
	import Title from '$lib/title.svelte';
</script>

<header>
	<div class="links">
		<Title />
		<div style="padding-top:30px; margin: 0px 20px;">
			<a href="/">Home</a>
			<a href="/about">About</a>
			<a href="/guides">Guides</a>
		</div>
	</div>
</header>
<main>
	<slot />
</main>
<footer>
	<p>Copyright 2022 Ninja gaming guide</p>
</footer>

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
	footer {
		text-align: center;
	}
</style>
