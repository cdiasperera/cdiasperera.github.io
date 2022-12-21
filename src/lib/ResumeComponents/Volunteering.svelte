<script>
    export let volunteer;
</script>
<h2>Volunteering</h2>
<ul>
    {#each volunteer as vol (vol.organization)}
        <li>{vol.organization}</li>
    {/each}
</ul>
