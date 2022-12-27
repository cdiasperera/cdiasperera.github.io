<script>
    import DateRange from "$lib/DateRange.svelte";

    export let work;
    work.sort((pos1, pos2) => {
        return Date.parse(pos2.startDate) - Date.parse(pos1.startDate)
    })
</script>
<h2>Work Experience</h2>
<ul>
    {#each work as position}
        <li><a href={position.url}>{position.name}</a></li>
        <ul>
            <li>{position.position}</li>
            <DateRange start={position.startDate} end={position.endDate}/>
            <li>{position.summary}</li>
            <ul>
                {#each position.highlights as highlight}
                    <li>{highlight}</li>
                {/each}
            </ul>

        </ul>
    {/each}
</ul>
