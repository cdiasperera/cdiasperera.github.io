<script>
    import NewsItem from "$lib/LandingComponents/NewsItem.svelte";
    import newsItems from '../../res/news.json';
</script>
<h1>News</h1>
<div>
    {#each newsItems as newsItem}
        <NewsItem info={newsItem}/>
    {/each}
</div>

<style>
    h1 {
        padding-top: 0em;
    }
    div{
        padding: 0.5em 1em;
    }
</style>
