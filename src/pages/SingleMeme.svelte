<script>
    import {currentMeme} from '../stores.js';
    import { draggable } from '@neodrag/svelte';
    let data = $currentMeme;
    let boxes = [];
    console.log('data', data);
    console.log('props', $$props);

    for(let i = 0; i < data.box_count; i++){
        let box = { 
            id: Math.floor(Math.random() * 9999),
            text: '',
            fontSize: 40,
            rotate: 0
         }
        boxes.push(box);
    }

</script>

<div class="container">
    <h1> {data.name} </h1>
    <div class="meme-card" id={data.id} style="background-image: url({data.url}); width:{data.width / 2}px; height:{data.height / 2}px">
        {#each boxes as box (box.id)}
            <div use:draggable={ {bounds: 'parent'} } style="font-size: {box.fontSize}px;" class="text-box">{box.text}</div>
        {/each}
    </div>
    
    {#each boxes as box (box.id)}
        <div class="caption-container">
            <div class="input-separator">
                <p>Caption</p>
                <input type="text" class="caption" placeholder="Add your own caption here" bind:value={box.text}>
            </div>
            <div class="input-separator">
                <p>Font Size</p>
                <input type="number" class="font-size-select" bind:value={box.fontSize}>
            </div>
        </div>
    {/each}
</div>

<style> 

h1 {
    color: #c9d1d4;
}
.container {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.meme-card {
    position: relative;
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    border-radius: 6px;
    padding: .5rem;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    margin-bottom: 2rem;
}

.text-box {
    color: white;
    font-size: 40px;
    font-weight: bold;
    text-shadow: 2px 2px 4px black;
    width: fit-content;
}

.caption-container {
    display: flex;
}

.input-separator:first-of-type {
    margin-right: 1rem;
}

.input-separator p {
    color: #c9d1d4;
    margin-bottom: 0.5rem;
}
.caption {
    width: 500px;
}

.meme-card:hover {
    cursor: pointer;
}
</style>