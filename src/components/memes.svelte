<script> 
    import { onMount } from 'svelte';
    import { getMemes } from '../../services/meme';
    import Meme from './meme.svelte';

    let memes = [];

    onMount( async () => {
        const res = await getMemes();
        memes = res.memes;
    })

</script>

{#each memes as item (item.id)}
        <Meme id={item.id} name={item.name} url={item.url}/>
{/each}

