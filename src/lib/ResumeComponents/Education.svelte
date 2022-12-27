<script>
    import DateRange from "$lib/DateRange.svelte";

    export let education;
</script>
<h2>Education</h2>
<ul>
    {#each education as cert (cert.institution)}
        <li><a href={cert.url}>{cert.institution}</a></li>
        <ul>
            <li>{cert.area}</li>
            <li>{cert.studyType}</li>
            <DateRange start={cert.startDate} end={cert.endDate}/>
            <li>{cert.score}</li>
        </ul>
    {/each}
</ul>
