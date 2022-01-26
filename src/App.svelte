<script>
	import Header from './header.svelte';
	import Footer from './footer.svelte';
	import Memes from './memeCard.svelte';
	import HomePage from './views/homePage.svelte';
</script>

<Header></Header>
<main>
	<HomePage/>
</main>
<Footer></Footer>

<style>
main {
	flex-grow: 1;
	display: flex;
	justify-content: center;
	gap: 1rem;
	flex-wrap: wrap;
	padding: 1rem;
	background: #0d1117;
}

</style>