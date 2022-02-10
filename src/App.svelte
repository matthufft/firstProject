<script>
	import Header from './header.svelte';
	import Footer from './footer.svelte';
	import Router from 'svelte-spa-router';
	import routes from './routes';
	import Sidebar from './Sidebar.svelte';
</script>

<Header></Header>
<main>
	<Sidebar/>
	<div class="main-page-content">
		<Router {routes}/>
	</div>
</main>
<Footer></Footer>

<style>
main {
	display: flex;
	flex-grow: 1;
	background: #0d1117;
}

.main-page-content {
    width: 100%;
}
</style>