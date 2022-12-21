<script>
    export let awards;
</script>
<h2>Awards</h2>
<ul>
    {#each awards as award (award.name)}
    <li>{award.title}</li>
    {/each}
</ul>