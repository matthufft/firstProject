<script> 
    import { onMount } from 'svelte';
    import { getMemes } from '../api/meme';

    let memes = [];

    onMount( async () => {
        const res = await getMemes();
        memes = res.memes;
        console.log('memes:', memes);
    })

    const openModal = () => {
        
    }

</script>

{#each memes as item}
    <div class="meme-card" id={item.id} >
        <p>{item.name}</p>
        <img src="{item.url}" alt="">
    </div>
{/each}

<style>
    .meme-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 1px solid black;
        border-radius: 6px;
        width: 15%;
        padding: .5rem;
        background: rgb(22 27 34);
    }

    p {
        color: #c9d1d4;
    }

    img {
        width: 100%;
        height: auto;
    }
</style>