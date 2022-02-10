import HomePage from './pages/HomePage.svelte';
import SingleMeme from './pages/SingleMeme.svelte';
import Memes from './pages/Memes.svelte';
import BitMiner from './pages/BitMiner.svelte';

const routes = {
    '/': HomePage,
    '/memes': Memes,
    '/meme/*': SingleMeme,
    '/bitminer': BitMiner

}

export default routes;