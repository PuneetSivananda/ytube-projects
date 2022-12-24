<script>
	import Title from "$lib/title.svelte";
    import "../../styles/global.css"
</script>

<header>
    <Title title="Ninja Gaming Guides"/>
    <div class="links">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/help/hello">Hello</a>
    </div>
</header>
<main>
    <!-- page content -->
    <slot></slot>
</main>
<footer>
    <p>Copyright 2022 Ninja gaming guide</p>
</footer>

<style>
    header{
        display: flex;
        justify-content: center;
    }
    main{
        max-width: 960px;
        margin: 20px auto;
    }
    footer{
        text-align: center;
    }
    .links{
        margin-left: auto;
    }
    a{
        margin-left: 10px ;
    }
</style>