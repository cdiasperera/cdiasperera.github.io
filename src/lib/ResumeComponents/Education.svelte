<script>
    export let education;
</script>
<h2>Education</h2>
<ul>
    {#each education as cert (cert.institution)}
        <li><a href={cert.url}>{cert.institution}</a></li>
        <ul>
            <li>{cert.area}</li>
            <li>{cert.studyType}</li>
            <li>{cert.startDate}-{cert.endDate}</li>
            <li>{cert.score}</li>
        </ul>
    {/each}
</ul>
