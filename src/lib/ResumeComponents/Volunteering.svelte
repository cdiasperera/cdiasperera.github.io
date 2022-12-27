<script>
    import DateRange from "$lib/DateRange.svelte";

    export let volunteer;
</script>
<h2>Volunteering</h2>
<ul>
    {#each volunteer as position}
        <li><a href={position.url}>{position.organization}</a></li>
        <li>{position.position}</li>
        <DateRange start={position.startDate} end={position.endDate}/>
        <li>{position.summary}</li>
        <ul>
            {#each position.highlights as highlight}
                <li>{highlight}</li>
            {/each}
        </ul>
    {/each}
</ul>
