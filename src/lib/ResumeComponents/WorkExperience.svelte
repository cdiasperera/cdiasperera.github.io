<script>
    export let work;
</script>
<h2>Work Experience</h2>
<ul>
    {#each work as wrk(wrk.name)}
        <li>{wrk.name}</li>
    {/each}
</ul>
