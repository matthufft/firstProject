import HomePage from './views/HomePage.svelte';
import SingleMeme from './views/singleMeme.svelte';

const routes = {
    '/': HomePage,
    '/meme/*': SingleMeme
}

export default routes;