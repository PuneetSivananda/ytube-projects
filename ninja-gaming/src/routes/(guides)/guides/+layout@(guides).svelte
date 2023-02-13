<script>
	import Title from '$lib/title.svelte';
</script>

<header>
	<div class="links">
		<Title title="About" />
		<div style="padding-top:30px; margin: 0px 20px;">
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
