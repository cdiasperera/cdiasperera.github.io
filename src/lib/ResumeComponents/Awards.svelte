<script>
    export let awards;
</script>
<h2>Awards</h2>
<ul>
    {#each awards as award (award.name)}
        <li>{award.title}</li>
        <ul>
            <li>{award.date}</li>
            <li>{award.awarder}</li>
            <li>{award.summary}</li>
        </ul>
    {/each}
</ul>