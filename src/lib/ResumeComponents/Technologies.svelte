<script>
    export let skills;
</script>
<h2>Technologies</h2>
<ul>
    {#each skills as skill}
        {#each skill.keywords as keyword}
            <li>{keyword}</li>
        {/each}
    {/each}
</ul>

<style>
    ul {
        -moz-column-count: 2;
        -moz-column-gap: 20px;
        -webkit-column-count: 2;
        -webkit-column-gap: 20px;
        column-count: 2;
        column-gap: 20px;
    }
</style>