<script>
    import ProjectImage from "$lib/ProjectImage.svelte";
    import LanguageIcon from "$lib/LanguageIcon.svelte";
    import github_ico from "../res/icons/github-mark.png";
    import placeholder from "../res/placeholder.webp"

    export let project;
</script>
<div class="card">
    <h3 class="title">
        {#if project.url}
            <a href={project.url}>{project.name}</a>
        {:else}
            {project.name}
        {/if}
        {#if project.repo}
            <a href={project.repo}><img class="github-ico" src={github_ico} alt="github logo"></a>
        {/if}
    </h3>
    {#each project.stack as lang (lang)}
        <LanguageIcon {lang}/>
    {/each}
    {#if project.image}
        <ProjectImage name={project.image}/>
    {:else }
        <img class="proj-img" src={placeholder} alt="placeholder"/>
    {/if}
    <p>{@html project.desc}</p>
</div>

<style>
    .card {
        padding: 0.75em;
        background-color: var(--bkg-deep);
        border-radius: 12px;
        margin: 1em 0.5em 0 0.5em;
        border: 1px solid rgba(0,0,0,0.1);
        box-shadow: 3px 3px 7px -2px rgba(0, 0, 0, 0.75);

        overflow: auto;

        position: relative;
    }

    .title {
        padding-bottom: 0.5em;
    }

    div p {
        padding-bottom: 0.25em;
    }

    .proj-img {
        display: inline-block;
        height: 10em;
        float: left;
        margin-right: 0.5em;
    }

    .github-ico {
        width: 1.3em;
        height: auto;
        display: inline-block;
        background-color: var(--white);
        border-radius: 50%;
        padding: 1px;
    }

</style>