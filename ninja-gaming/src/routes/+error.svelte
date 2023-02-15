<script context="module">
	// @ts-ignore
	export function load({ error }) {
		return {
			props: { message: error.message }
		};
	}
</script>

<script>
	/**
	 * @type {any}
	 */
	export let message;
	console.log(message);
</script>

<div class="error">
	<h3>Oops</h3>
	<p>{message}</p>
	<a href="/guides">View all Guides</a>
</div>

<style>
	.error {
		text-align: center;
		margin-top: 20%;
	}
</style>
