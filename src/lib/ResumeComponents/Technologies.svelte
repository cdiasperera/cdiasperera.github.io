<script>
    export let skills;
</script>
<h2>Technologies</h2>
<ul>
    {#each skills as skill (skill.name)}
        <li>{skill.name}</li>
    {/each}
</ul>
