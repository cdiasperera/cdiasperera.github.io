<script>
    export let start;
    export let end;
    let numDefined = 0;

    if (start) {
        numDefined++
    }

    if (end) {
        numDefined++
    } else {
        end = "Present"
    }
</script>
{#if (numDefined !== 0)}
    <li>{start} to {end}</li>
{/if}