<script>
	import Header from './header.svelte';
	import Footer from './footer.svelte';
	import Router from 'svelte-spa-router';
	import routes from './routes';
</script>

<Header></Header>
<main>
	<Router {routes}/>
</main>
<Footer></Footer>

<style>
main {
	flex-grow: 1;
	padding: 1rem;
	background: #0d1117;
}

</style>