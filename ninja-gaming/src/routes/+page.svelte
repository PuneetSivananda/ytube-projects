<script>
	let title = 'Ninja Gaming Guide';
	const updateTitle = () => {
		title = 'SomeOther Gaming Guide';
	};
</script>


<div class="index">
	<h2>{title}</h2>
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
	<a href="/">Home</a>
	<a href="/about">About</a>

</div>

<style>
	.index {
		text-align: center;
		display: block;
		margin: 20px auto;
	}
</style>
