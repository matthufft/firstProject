<script>
    import {currentMeme} from '../stores.js';

    let data = $currentMeme;
    let boxes = [];
    console.log('data', data);

    for(let i = 0; i < data.box_count; i++){
        let box = { id: Math.floor(Math.random() * 9999) }
        boxes.push(box);
    }
    console.log(boxes);

</script>

<div class="container">
    <h1> {data.name} </h1>
    <div class="meme-card" id={data.id} style="background-image: url({data.url}); width:{data.width}px; height:{data.height}px">
        {#each boxes as box (box.id)}
            <input type="text" class="caption" placeholder="Add your own caption here">
        {/each}
    </div>
</div>

<style> 
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
}

.meme-card .caption {
    position: absolute;
}

.meme-card:hover {
    cursor: pointer;
}
</style>