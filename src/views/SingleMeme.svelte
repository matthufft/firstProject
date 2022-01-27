<script>
    import Meme from '../components/meme.svelte';
    import {currentMeme} from '../stores.js';
    import {get} from 'svelte/store';

    let data = $currentMeme;

</script>

<h1> {data.name} </h1>
<div class="meme-card" id={data.id} style="background-image: url({data.url})">
</div>

<style> 
.meme-card {
    display: flex;
    justify-content: center;
    border: 1px solid black;
    border-radius: 6px;
    width: 17vw;
    height: 17vw;
    padding: .5rem;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}

.meme-card:hover {
    cursor: pointer;
}
</style>