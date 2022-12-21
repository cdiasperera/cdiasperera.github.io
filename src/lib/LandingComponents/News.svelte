<script>
    import NewsItem from "$lib/LandingComponents/NewsItem.svelte";
    import newsItems from '../../res/news.json';
</script>
<div>
    <h1>News</h1>
    {#each newsItems as newsItem (newsItem.id)}
        <NewsItem info={newsItem}/>
    {/each}
</div>

<style>
    div {
        padding: 0.5em 1em;
    }
</style>
