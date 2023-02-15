<script>
	/** @type {import('./$types').PageData} */
	export let data;
	let guide = data.props?.guide;
	console.log(data);
</script>

<div class="guide">
	<h2>{guide.title}</h2>
	<p>{guide.body}</p>
</div>

<style>
	.guide {
		margin-top: 40px;
		padding: 10px;
		border: 1px dotted rgba(255, 255, 255, 0.4);
	}
</style>
