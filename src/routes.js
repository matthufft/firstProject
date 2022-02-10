import HomePage from './pages/HomePage.svelte';
import SingleMeme from './pages/SingleMeme.svelte';
import Memes from './pages/Memes.svelte';

const routes = {
    '/': HomePage,
    '/memes': Memes,
    '/meme/*': SingleMeme

}

export default routes;