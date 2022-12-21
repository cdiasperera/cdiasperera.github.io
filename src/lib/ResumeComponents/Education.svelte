<script>
    export let education;
</script>
<h2>Education</h2>
<ul>
    {#each education as edu (edu.institution)}
        <li>{edu.institution}</li>
    {/each}
</ul>
