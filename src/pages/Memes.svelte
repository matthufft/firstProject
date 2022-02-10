<script> 
    import { onMount } from 'svelte';
    import { getMemes } from '../../services/meme';
    import Meme from '../components/meme.svelte';

    let memes = [];

    onMount( async () => {
        const res = await getMemes();
        memes = res.memes;
    })

</script>

<h1>Select a meme to add your own caption</h1>
<div class="content">
    {#each memes as item (item.id)}
            <Meme id={item.id} name={item.name} url={item.url}/>
    {/each}
</div>


<style>
    
    h1 {
        text-align: center;
    }

    .content {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 1rem;
    }
</style>