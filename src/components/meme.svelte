<script>
    import {push, pop, replace} from 'svelte-spa-router';
    import {memes, currentMeme} from '../stores.js';
    export let id;
    export let url;
    export let name;

    const viewMeme = (e) =>{
        let id = e.target.id;
        
        let memeData = $memes.memes;
        currentMeme.set(memeData.find(el => el.id == id));

        push('/meme/?id=' + id);
    }
</script>


<div on:click={viewMeme}
    class="meme-card"
    {id}
    style="background-image: url({url})">
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

    p {
        color: #c9d1d4;
        margin: 0;
        height: fit-content;
        user-select: none;
        pointer-events: none;
    }
</style>