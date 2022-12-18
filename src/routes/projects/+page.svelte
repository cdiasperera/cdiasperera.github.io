<script>
    import Header from "$lib/Header.svelte";
    import Project from "$lib/Project.svelte";
    import projects from '../../res/projects.json';
</script>

<Header/>
<h1> My Personal Projects</h1>
{#each projects as project (project.id)}
<Project project={project}/>
{/each}
<div class="footer"></div>

<style>
    h1 {
        padding: 0.5em 0 0 0.5em;
    }

    .footer {
        padding-top: 0.5em;
    }
</style>