<script>
	import '../styles/global.css';
</script>

<header>
	<div class="links">
		<a href="/">Home</a>
		<a href="/about">About</a>
		<a href="/guides">Guides</a>
	</div>
</header>
<main>
	<slot />
</main>
<footer>
	<p>Copyright 2022 Ninja gaming guide</p>
</footer>

<style>
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
