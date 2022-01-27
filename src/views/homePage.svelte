<script>
    import Memes from '../components/memes.svelte'

</script>


<h2>A nice home page title</h2>
    
<div class="home-content">
    <Memes/>
</div>

<style>
    h2 {
        color: rgb(255 255 255 / 70%);;
    }

    .home-content {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 1rem;
    }
</style>