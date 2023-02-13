<script>
	import Title from '$lib/title.svelte';
	let title = 'Ninja Gaming Guide';
	const updateTitle = () => {
		title = 'SomeOther Gaming Guide';
	};
</script>

<header>
	<div class="links">
		<Title title="Ninja Gaming Guides" />
		<div style="padding-top:30px; margin: 0px 20px;">
			<a href="/">Home</a>
			<a href="/about">About</a>
			<a href="/guides">Guides</a>
		</div>
	</div>
</header>
<div class="index">
	<p>
		Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi rem magni delectus beatae
		dolorum mollitia animi! Sequi, accusamus doloremque. Reiciendis, sit debitis! Modi at odio
		culpa. Deleniti deserunt eum eius! Lorem ipsum dolor sit, amet consectetur adipisicing elit.
		Facere aliquid, incidunt iusto voluptates adipisci harum consectetur expedita illum magni sint
		asperiores consequuntur aliquam maiores, explicabo qui quod quia maxime quas.
	</p>
	<button on:click={updateTitle}>Change Title</button>
	<input type="text" bind:value={title} />
	<hr />
	<a href="/guides">Guides</a>
	<a href="/about">About</a>
</div>

<style>
	.index {
		text-align: center;
		display: block;
		margin: 20px auto;
	}
</style>
